import {
  Component,
  computed,
  effect,
  input,
  OnInit,
  output,
  signal,
  untracked,
} from '@angular/core';
import {MatButtonToggle, MatButtonToggleChange, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {GeoJSONSourceComponent, LayerComponent, MapComponent} from '@maplibre/ngx-maplibre-gl';
import type {Feature, FeatureCollection, Polygon} from 'geojson';
import type {Map, MapLayerMouseEvent, MapLibreEvent, MapLibreZoomEvent, StyleSpecification} from 'maplibre-gl';

import CardComponent from '../card/card.component';
import {DynamicFilterComponent} from '../dynamic-filter/dynamic-filter.component';
import {AuxReduceOption, FilterOptionInterface} from '../../../interfaces';
import {EventData} from '@angular/cdk/testing';
import {MultiplesPipe} from '../../../pipes';
import {normalizzaStringa, resolveColorVariable} from '../../../utils';

const EMPTY_COLLECTION: FeatureCollection = {type: 'FeatureCollection', features: []};

const MAP_STYLE: StyleSpecification = {
  version: 8,
  sources: {},
  layers: [],
};

function reduceValues(values: number[], mode: AuxReduceOption['reduceBy']): number {
  switch (mode) {
    case 'sum':
      return values.reduce((a, b) => a + b, 0);
    case 'max':
      return values.length ? Math.max(...values) : 0;
    case 'count':
      return values.length;
    case 'countunique':
      return new Set(values).size;
  }
}

function hexToRgb(hex: string): [number, number, number] | null {
  const clean = hex.trim().replace('#', '');
  if (clean.length === 6) {
    return [
      parseInt(clean.slice(0, 2), 16),
      parseInt(clean.slice(2, 4), 16),
      parseInt(clean.slice(4, 6), 16),
    ];
  }
  return null;
}

/** Returns 4 tints of baseColor mixed with white at 20 / 45 / 70 / 100% intensity. */
function generateGradientShades(baseColor: string): [string, string, string, string] {
  const rgb = hexToRgb(baseColor);
  if (!rgb) return [baseColor, baseColor, baseColor, baseColor];
  const [r, g, b] = rgb;
  const mix = (ratio: number): string => {
    const cr = Math.round(r * ratio + 255 * (1 - ratio));
    const cg = Math.round(g * ratio + 255 * (1 - ratio));
    const cb = Math.round(b * ratio + 255 * (1 - ratio));
    return `#${cr.toString(16).padStart(2, '0')}${cg.toString(16).padStart(2, '0')}${cb.toString(16).padStart(2, '0')}`;
  };
  return [mix(0.2), mix(0.45), mix(0.7), mix(1.0)];
}

@Component({
  selector: 'sheldon-mosaic-map',
  standalone: true,
  imports: [
    CardComponent,
    DynamicFilterComponent,
    MapComponent,
    GeoJSONSourceComponent,
    LayerComponent,
    MatButtonToggleGroup,
    MatButtonToggle,
    MultiplesPipe,
  ],
  templateUrl: './sheldon-mosaic-map.component.html',
  styleUrl: './sheldon-mosaic-map.component.scss',
})
export default class SheldonMosaicMapComponent implements OnInit {

  // ── Inputs ─────────────────────────────────────────────────────────────────
  title = input<string>('Mappa');
  data = input<FeatureCollection<Polygon> | null>(null);
  auxReduce = input<AuxReduceOption[]>([]);
  municipalityKey = input<string>('comune');
  tooltipProperties = input<{ property: string, label: string }[]>([]);
  categoria = input<string>('ambiente');

  // ── Outputs ────────────────────────────────────────────────────────────────
  polygonHover = output<Feature<Polygon>>();

  // ── Public constants for template ─────────────────────────────────────────
  readonly mapStyle = MAP_STYLE;

  // ── State ──────────────────────────────────────────────────────────────────
  mapReady = signal(false);
  activeAuxReduce = signal<AuxReduceOption | null>(null);
  private selectedComune = signal<string | null>(null);
  private isHovering = signal(false);
  hoveredFeature = signal<Feature<Polygon> | null>(null);
  tooltipPos = signal<{ x: number; y: number } | null>(null);

  private mapInstance: Map | null = null;
  private hoveredFeatureId: string | number | null = null;
  private pinnedFeature: Feature<Polygon> | null = null;
  private pinnedTooltipPos: { x: number; y: number } | null = null;

  // ── Computed ───────────────────────────────────────────────────────────────

  /** Dataset shaped for sheldon-dynamic-filter. */
  comuniDataset = computed(() => {
    const key = this.municipalityKey();
    return (this.data()?.features ?? []).map((f) => ({
      comune: String(f.properties?.[key] ?? ''),
      valore: 0 as number,
    }));
  });

  /** Per-comune aggregated value from polygon properties. */
  private comuneValues = computed<Record<string, number>>(() => {
    const opt = this.activeAuxReduce();
    if (!opt) return {};
    const key = this.municipalityKey();
    const grouped: Record<string, number[]> = {};
    for (const f of this.data()?.features ?? []) {
      const comune = String(f.properties?.[key] ?? '');
      if (!comune) continue;
      (grouped[comune] ??= []).push(Number(f.properties?.[opt.campo] ?? 0));
    }
    const out: Record<string, number> = {};
    for (const [k, vals] of Object.entries(grouped)) {
      out[k] = reduceValues(vals, opt.reduceBy);
    }
    return out;
  });

  /** Polygons with `_rawValue` (raw reduced value) injected per comune for choropleth fill. */
  derivedPolygons = computed<FeatureCollection<Polygon>>(() => {
    const polys = this.data();
    if (!polys) return EMPTY_COLLECTION as FeatureCollection<Polygon>;
    const rawVals = this.comuneValues();
    const key = this.municipalityKey();
    return {
      ...polys,
      features: polys.features.map((f) => ({
        ...f,
        properties: {
          ...f.properties,
          _rawValue: rawVals[String(f.properties?.[key] ?? '')] ?? 0,
        },
      })),
    };
  });

  readonly legendLabels = ['0', '<2', '<4', '4+'];

  /** 4 tints of the categoria start color: ranges 0 / <2 / <4 / >=4. */
  colorShades = computed<[string, string, string, string]>(() => {
    const categoria = normalizzaStringa(this.categoria());
    let baseColor = resolveColorVariable(`--color-gradient-${categoria}-start`);
    if(baseColor ==='#000'){
      baseColor = '#1d1d1d';
    }
    return generateGradientShades(baseColor);
  });

  /** MapLibre step expression mapping _rawValue to the 4 choropleth shades. */
  private choroplethColorExpr = computed((): any[] => {
    const [s0, s1, s2, s3] = this.colorShades();
    // s0 → value=0 | s1 → 0<v<2 | s2 → 2≤v<4 | s3 → v≥4
    return ['step', ['get', '_rawValue'], s0, 0.0001, s1, 2, s2, 4, s3];
  });

  /** Fill layer paint with choropleth colors and hover/filter state. */
  comuniFillPaint = computed(() => {
    const sel = this.selectedComune();
    const key = this.municipalityKey();
    const hovering = this.isHovering();
    const choropleth = this.choroplethColorExpr();
    const zeroShade = this.colorShades()[0];

    // Filter active: selected keeps choropleth color, others show zero-range shade at full opacity
    if (sel) {
      return {
        'fill-outline-color': 'transparent' as any,
        'fill-color': ['case', ['==', ['get', key], sel], choropleth, zeroShade] as any,
        'fill-opacity': 1.0 as any,
      };
    }

    // Hover active: all polygons keep choropleth color, non-hovered dim to 0.8
    if (hovering) {
      return {
        'fill-outline-color': 'transparent' as any,
        'fill-color': choropleth as any,
        'fill-opacity': ['case', ['boolean', ['feature-state', 'hover'], false], 1.0, 0.8] as any,
      };
    }

    return {
      'fill-outline-color': 'transparent' as any,
      'fill-color': choropleth as any,
      'fill-opacity': 1.0 as any,
    };
  });

  /** Bounding box of the full FeatureCollection expanded by 10% on each side. */
  private collectionBbox = computed<[[number, number], [number, number]] | null>(() => {
    const fc = this.data();
    if (!fc?.features.length) return null;
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    for (const f of fc.features) {
      const rings: [number, number][][] = [f.geometry.coordinates.flat(1)] as [number, number][][];
      for (const ring of rings) {
        for (const [x, y] of ring) {
          if (x < minX) minX = x;
          if (y < minY) minY = y;
          if (x > maxX) maxX = x;
          if (y > maxY) maxY = y;
        }
      }
    }
    const px = (maxX - minX) * 0.1;
    const py = (maxY - minY) * 0.1;
    return [[minX - px, minY - py], [maxX + px, maxY + py]];
  });

  constructor() {
    effect(() => {
      const bb = this.collectionBbox();
      if (!bb || !this.mapReady()) return;
      const map = untracked(() => this.mapInstance);
      if (!map) return;
      map.setMaxBounds(bb);
      map.fitBounds(bb);
    });
  }

  ngOnInit(): void {
    if (this.auxReduce().length) {
      this.activeAuxReduce.set(this.auxReduce()[0]);
    }
  }

  // ── Map lifecycle ──────────────────────────────────────────────────────────

  onMapLoad(map: Map): void {
    this.mapInstance = map;
    this.mapReady.set(true);
  }

  // ── Layer events ───────────────────────────────────────────────────────────

  onPolygonEnter(event: MapLayerMouseEvent): void {
    const map = this.mapInstance;
    if (!map || !event.features?.length) return;
    if (this.selectedComune()) return;
    const feature = event.features[0] as unknown as Feature<Polygon>;

    this.isHovering.set(true);

    if (this.hoveredFeatureId !== null) {
      map.setFeatureState({source: 'comuni', id: this.hoveredFeatureId}, {hover: false});
    }
    this.hoveredFeatureId = (event.features[0].id as string | number) ?? null;
    if (this.hoveredFeatureId !== null) {
      map.setFeatureState({source: 'comuni', id: this.hoveredFeatureId}, {hover: true});
    }

    this.hoveredFeature.set(feature);
    this.tooltipPos.set({x: event.point.x, y: event.point.y});
    map.getCanvas().style.cursor = 'pointer';
    this.polygonHover.emit(feature);
  }

  onPolygonLeave(): void {
    const map = this.mapInstance;
    if (!map) return;
    if (this.hoveredFeatureId !== null) {
      map.setFeatureState({source: 'comuni', id: this.hoveredFeatureId}, {hover: false});
      this.hoveredFeatureId = null;
    }
    this.isHovering.set(false);
    map.getCanvas().style.cursor = '';

    if (this.pinnedFeature && this.pinnedTooltipPos) {
      this.hoveredFeature.set(this.pinnedFeature);
      this.tooltipPos.set(this.pinnedTooltipPos);
    } else {
      this.hoveredFeature.set(null);
      this.tooltipPos.set(null);
    }
  }

  // ── Control events ─────────────────────────────────────────────────────────

  onFilterChange(filters: FilterOptionInterface[]): void {
    const comuneFilter = filters.find((f) => f.key === 'comune');
    const value = comuneFilter?.value ?? null;
    this.selectedComune.set(value);

    if (!value) {
      if (this.hoveredFeatureId !== null && this.mapInstance) {
        this.mapInstance.setFeatureState({source: 'comuni', id: this.hoveredFeatureId}, {hover: false});
        this.hoveredFeatureId = null;
      }
      this.pinnedFeature = null;
      this.pinnedTooltipPos = null;
      this.hoveredFeature.set(null);
      this.tooltipPos.set(null);
      return;
    }

    const feature = this.data()?.features.find(
      (f) => String(f.properties?.[this.municipalityKey()]) === value
    );
    if (feature && this.mapInstance) {
      const coords = feature.geometry.coordinates[0];
      const lng = coords.reduce((sum, c) => sum + c[0], 0) / coords.length;
      const lat = coords.reduce((sum, c) => sum + c[1], 0) / coords.length;
      const point = this.mapInstance.project([lng, lat]);

      if (this.hoveredFeatureId !== null) {
        this.mapInstance.setFeatureState({source: 'comuni', id: this.hoveredFeatureId}, {hover: false});
      }
      this.hoveredFeatureId = feature.id ?? null;
      if (this.hoveredFeatureId !== null) {
        this.mapInstance.setFeatureState({source: 'comuni', id: this.hoveredFeatureId}, {hover: true});
      }
      this.pinnedFeature = feature;
      this.pinnedTooltipPos = {x: point.x, y: point.y};
      this.hoveredFeature.set(feature);
      this.tooltipPos.set(this.pinnedTooltipPos);
      this.polygonHover.emit(feature);
    }
  }

  onReduceChange(event: MatButtonToggleChange): void {
    this.activeAuxReduce.set(event.value as AuxReduceOption);
  }

  logZoomLevel($event: MapLibreEvent<MouseEvent | TouchEvent | WheelEvent> & EventData): void {
    console.log(`current zoom : ${$event.target.getZoom()}`);
  }
}
