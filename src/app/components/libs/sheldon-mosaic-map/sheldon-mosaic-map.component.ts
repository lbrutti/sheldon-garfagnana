import {
  Component,
  computed,
  effect,
  ElementRef,
  input,
  OnInit,
  output,
  signal,
  untracked,
  ViewChild,
} from '@angular/core';
import {DecimalPipe, JsonPipe} from '@angular/common';
import {MatButtonToggle, MatButtonToggleChange, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {GeoJSONSourceComponent, LayerComponent, MapComponent} from '@maplibre/ngx-maplibre-gl';
import type {Feature, FeatureCollection, Polygon} from 'geojson';
import type {Map, MapLayerMouseEvent, MapLibreEvent, MapLibreZoomEvent, StyleSpecification} from 'maplibre-gl';

import CardComponent from '../card/card.component';
import {DynamicFilterComponent} from '../dynamic-filter/dynamic-filter.component';
import {AuxReduceOption, ColorStop, FilterOptionInterface} from '../../../interfaces';
import {EventData} from '@angular/cdk/testing';
import {MultiplesPipe} from '../../../pipes';

const DEFAULT_COLOR_STOPS: ColorStop[] = [
  {value: 0, color: '#1a3a6b'},
  {value: 20, color: '#1a6b8a'},
  {value: 35, color: '#2196b4'},
  {value: 50, color: '#48c898'},
  {value: 65, color: '#c8a840'},
  {value: 80, color: '#e07040'},
  {value: 100, color: '#e04848'},
];

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

function polygonBbox(feature: Feature<Polygon>): [number, number, number, number] {
  const coords = feature.geometry.coordinates.flat(1) as [number, number][];
  const lngs = coords.map((c) => c[0]);
  const lats = coords.map((c) => c[1]);
  return [Math.min(...lngs), Math.min(...lats), Math.max(...lngs), Math.max(...lats)];
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
    DecimalPipe,
    MultiplesPipe,
    JsonPipe,
  ],
  templateUrl: './sheldon-mosaic-map.component.html',
  styleUrl: './sheldon-mosaic-map.component.scss',
})
export default class SheldonMosaicMapComponent implements OnInit {

  // ── Inputs ─────────────────────────────────────────────────────────────────
  title = input<string>('Mappa');
  data = input<FeatureCollection<Polygon> | null>(null);
  auxReduce = input<AuxReduceOption[]>([]);
  colorSetting = input<ColorStop[]>(DEFAULT_COLOR_STOPS);
  municipalityKey = input<string>('comune');
  tooltipProperties = input<{ property: string, label: string }[]>([]);


  // ── Outputs ────────────────────────────────────────────────────────────────
  polygonHover = output<Feature<Polygon>>();

  // ── Public constants for template ─────────────────────────────────────────
  readonly mapStyle = MAP_STYLE;

  // ── State ──────────────────────────────────────────────────────────────────
  mapReady = signal(false);
  activeAuxReduce = signal<AuxReduceOption | null>(null);
  private selectedComune = signal<string | null>(null);
  hoveredFeature = signal<Feature<Polygon> | null>(null);
  tooltipPos = signal<{ x: number; y: number } | null>(null);

  private mapInstance: Map | null = null;
  private hoveredFeatureId: string | number | null = null;

  // ── Computed ───────────────────────────────────────────────────────────────

  /** Dataset shaped for sheldon-dynamic-filter (needs DataInterface-compatible objects). */
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

  /** comuneValues normalized to [0, 100] for choropleth mapping. */
  private normalizedValues = computed<Record<string, number>>(() => {
    const vals = Object.values(this.comuneValues());
    if (!vals.length) return {};
    const min = Math.min(...vals);
    const max = Math.max(...vals);
    const range = max - min || 1;
    return Object.fromEntries(
      Object.entries(this.comuneValues()).map(([k, v]) => [k, ((v - min) / range) * 100])
    );
  });

  /** Polygons with `_colorValue` (0-100) injected per comune for choropleth fill. */
  derivedPolygons = computed<FeatureCollection<Polygon>>(() => {
    const polys = this.data();
    if (!polys) return EMPTY_COLLECTION as FeatureCollection<Polygon>;
    const norm = this.normalizedValues();
    const key = this.municipalityKey();
    return {
      ...polys,
      features: polys.features.map((f) => ({
        ...f,
        properties: {
          ...f.properties,
          _colorValue: norm[String(f.properties?.[key] ?? '')] ?? 0,
        },
      })),
    };
  });

  /** MapLibre interpolate expression built from colorSetting input. */
  private colorExpression = computed(() => {
    const stops = this.colorSetting().flatMap((s) => [s.value, s.color]);
    return ['interpolate', ['linear'], ['get', '_colorValue'], ...stops];
  });

  /** Fill layer paint — choropleth color with hover/select opacity. */
  comuniFillPaint = computed(() => {
    const sel = this.selectedComune();
    const key = this.municipalityKey();
    const conditions: any[] = ['case'];
    if (sel) {
      conditions.push(['==', ['get', key], sel], 1.0);
    }
    conditions.push(['boolean', ['feature-state', 'hover'], false], 0.7, 0.88);
    return {
      'fill-color': this.colorExpression() as any,
      'fill-opacity': conditions as any,
    };
  });

  /** Filter for the selected-comune highlight line layer. */
  selectedFilter = computed<any>(() => {
    const key = this.municipalityKey();
    return this.selectedComune()
      ? ['==', ['get', key], this.selectedComune()]
      : ['==', ['get', key], '__none__'];
  });


  /** Aggregated value for the currently hovered feature. */
  hoveredValue = computed(() => {
    const f = this.hoveredFeature();
    if (!f) return null;
    const comune = String(f.properties?.[this.municipalityKey()] ?? '');
    return this.comuneValues()[comune] ?? null;
  });

  /** Bounding box of the full FeatureCollection expanded by 5% on each side. */
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
    const feature = event.features[0] as unknown as Feature<Polygon>;

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
    this.hoveredFeature.set(null);
    this.tooltipPos.set(null);
    map.getCanvas().style.cursor = '';
  }

  // ── Control events ─────────────────────────────────────────────────────────

  onFilterChange(filters: FilterOptionInterface[]): void {
    const comuneFilter = filters.find((f) => f.key === 'comune');
    const value = comuneFilter?.value ?? null;
    this.selectedComune.set(value);

    if (value && this.mapInstance) {
      const feature = this.data()?.features.find(
        (f) => String(f.properties?.[this.municipalityKey()]) === value
      );
      if (feature) {
        this.mapInstance.fitBounds(polygonBbox(feature));
      }
    }
  }

  onReduceChange(event: MatButtonToggleChange): void {
    this.activeAuxReduce.set(event.value as AuxReduceOption);
  }

  logZoomLevel($event: MapLibreEvent<MouseEvent | TouchEvent | WheelEvent> & EventData): void {
    console.log(`current zoom : ${$event.target.getZoom()}`);
  }
}
