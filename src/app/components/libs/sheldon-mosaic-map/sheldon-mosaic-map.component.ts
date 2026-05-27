import {
  Component,
  computed,
  effect,
  ElementRef,
  input,
  OnInit,
  output,
  signal,
  ViewChild,
} from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { MatButtonToggle, MatButtonToggleChange, MatButtonToggleGroup } from '@angular/material/button-toggle';
import { GeoJSONSourceComponent, LayerComponent, MapComponent } from '@maplibre/ngx-maplibre-gl';
import type { Feature, FeatureCollection, Point, Polygon } from 'geojson';
import type { Map, MapLayerMouseEvent, StyleSpecification } from 'maplibre-gl';

import CardComponent from '../card/card.component';
import { DynamicFilterComponent } from '../dynamic-filter/dynamic-filter.component';
import { FilterOptionInterface } from '../../../interfaces';
import { AuxReduceOption, ColorStop } from '../../../interfaces/mosaic-map.interface';

const DEFAULT_COLOR_STOPS: ColorStop[] = [
  { value: 0, color: '#1a3a6b' },
  { value: 20, color: '#1a6b8a' },
  { value: 35, color: '#2196b4' },
  { value: 50, color: '#48c898' },
  { value: 65, color: '#c8a840' },
  { value: 80, color: '#e07040' },
  { value: 100, color: '#e04848' },
];

const EMPTY_COLLECTION: FeatureCollection = { type: 'FeatureCollection', features: [] };

const MAP_STYLE: StyleSpecification = {
  version: 8,
  sources: {
    osm: {
      type: 'raster',
      tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
      tileSize: 256,
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    },
  },
  layers: [
    {
      id: 'osm',
      type: 'raster',
      source: 'osm',
      paint: { 'raster-opacity': 0.25, 'raster-saturation': -1, 'raster-brightness-max': 0.28 },
    },
  ],
};

function createSquareSdf(
  size: number,
): { data: Uint8ClampedArray; width: number; height: number } {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, size, size);
  ctx.fillStyle = '#fff';
  ctx.fillRect(1, 1, size - 2, size - 2);
  return { data: ctx.getImageData(0, 0, size, size).data, width: size, height: size };
}

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
  ],
  templateUrl: './sheldon-mosaic-map.component.html',
  styleUrl: './sheldon-mosaic-map.component.scss',
})
export default class SheldonMosaicMapComponent implements OnInit {
  @ViewChild('legendCanvas') legendCanvas?: ElementRef<HTMLCanvasElement>;

  // ── Inputs ─────────────────────────────────────────────────────────────────
  title = input<string>('Mappa');
  polygons = input<FeatureCollection<Polygon> | null>(null);
  points = input<FeatureCollection<Point> | null>(null);
  auxReduce = input<AuxReduceOption[]>([]);
  colorSetting = input<ColorStop[]>(DEFAULT_COLOR_STOPS);

  // ── Outputs ────────────────────────────────────────────────────────────────
  polygonHover = output<Feature<Polygon>>();

  // ── Public constants for template ─────────────────────────────────────────
  readonly mapStyle = MAP_STYLE;
  readonly emptyCollection = EMPTY_COLLECTION;
  readonly squareLayout: any = {
    'icon-image': 'sq',
    'icon-size': [
      'interpolate', ['exponential', 2], ['zoom'],
      7, 0.068, 8, 0.137, 9, 0.273, 10, 0.547, 11, 1.093, 12, 2.187, 13, 4.374, 14, 8.748,
    ],
    'icon-allow-overlap': true,
    'icon-ignore-placement': true,
    'icon-rotation-alignment': 'map',
    'icon-pitch-alignment': 'map',
  };

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
  comuniDataset = computed(() =>
    (this.polygons()?.features ?? []).map((f) => ({
      comune: String(f.properties?.['comune'] ?? ''),
      valore: 0 as number,
    }))
  );

  /** Per-comune aggregated value from polygon properties. */
  private comuneValues = computed<Record<string, number>>(() => {
    const opt = this.activeAuxReduce();
    if (!opt) return {};
    const grouped: Record<string, number[]> = {};
    for (const f of this.polygons()?.features ?? []) {
      const comune = String(f.properties?.['comune'] ?? '');
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

  /** Points with `_colorValue` (0-100) injected per comune. */
  derivedPoints = computed<FeatureCollection>(() => {
    const pts = this.points();
    if (!pts) return EMPTY_COLLECTION;
    const norm = this.normalizedValues();
    return {
      ...pts,
      features: pts.features.map((f) => ({
        ...f,
        properties: {
          ...f.properties,
          _colorValue: norm[String(f.properties?.['comune'] ?? '')] ?? 0,
        },
      })),
    };
  });

  /** MapLibre interpolate expression built from colorSetting input. */
  private colorExpression = computed(() => {
    const stops = this.colorSetting().flatMap((s) => [s.value, s.color]);
    return ['interpolate', ['linear'], ['get', '_colorValue'], ...stops];
  });

  /** Symbol layer paint — reactive to colorSetting changes. */
  squarePaint = computed(() => ({
    'icon-color': this.colorExpression() as any,
    'icon-opacity': 0.93,
  }));

  /** Fill layer paint — reactive to selectedComune for highlight. */
  comuniFillPaint = computed(() => {
    const sel = this.selectedComune();
    const conditions: any[] = ['case'];
    if (sel) {
      conditions.push(['==', ['get', 'comune'], sel], 0.35);
    }
    conditions.push(['boolean', ['feature-state', 'hover'], false], 0.15, 0);
    return {
      'fill-color': '#4a9eff',
      'fill-opacity': conditions as any,
    };
  });

  /** Filter for the selected-comune highlight line layer. */
  selectedFilter = computed<any>(() =>
    this.selectedComune()
      ? ['==', ['get', 'comune'], this.selectedComune()]
      : ['==', ['get', 'comune'], '__none__']
  );

  /** Min/max labels for the legend. */
  legendMin = computed(() => {
    const vals = Object.values(this.comuneValues());
    return vals.length ? Math.min(...vals) : 0;
  });
  legendMax = computed(() => {
    const vals = Object.values(this.comuneValues());
    return vals.length ? Math.max(...vals) : 0;
  });

  /** Aggregated value for the currently hovered feature. */
  hoveredValue = computed(() => {
    const f = this.hoveredFeature();
    if (!f) return null;
    const comune = String(f.properties?.['comune'] ?? '');
    return this.comuneValues()[comune] ?? null;
  });

  constructor() {
    effect(() => {
      const canvas = this.legendCanvas?.nativeElement;
      if (!canvas || !this.mapReady()) return;
      const settings = this.colorSetting();
      const ctx = canvas.getContext('2d')!;
      const grad = ctx.createLinearGradient(0, 0, 160, 0);
      settings.forEach((s) => grad.addColorStop(s.value / 100, s.color));
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 160, 8);
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
    map.addImage('sq', createSquareSdf(16), { sdf: true });
    this.mapReady.set(true);
  }

  // ── Layer events ───────────────────────────────────────────────────────────

  onPolygonEnter(event: MapLayerMouseEvent): void {
    const map = this.mapInstance;
    if (!map || !event.features?.length) return;
    const feature = event.features[0] as unknown as Feature<Polygon>;

    if (this.hoveredFeatureId !== null) {
      map.setFeatureState({ source: 'comuni', id: this.hoveredFeatureId }, { hover: false });
    }
    this.hoveredFeatureId = (event.features[0].id as string | number) ?? null;
    if (this.hoveredFeatureId !== null) {
      map.setFeatureState({ source: 'comuni', id: this.hoveredFeatureId }, { hover: true });
    }

    this.hoveredFeature.set(feature);
    this.tooltipPos.set({ x: event.point.x, y: event.point.y });
    map.getCanvas().style.cursor = 'pointer';
    this.polygonHover.emit(feature);
  }

  onPolygonMove(event: MapLayerMouseEvent): void {
    this.tooltipPos.set({ x: event.point.x, y: event.point.y });
  }

  onPolygonLeave(): void {
    const map = this.mapInstance;
    if (!map) return;
    if (this.hoveredFeatureId !== null) {
      map.setFeatureState({ source: 'comuni', id: this.hoveredFeatureId }, { hover: false });
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
      const feature = this.polygons()?.features.find(
        (f) => String(f.properties?.['comune']) === value
      );
      if (feature) {
        this.mapInstance.fitBounds(polygonBbox(feature), { padding: 40, maxZoom: 13 });
      }
    }
  }

  onReduceChange(event: MatButtonToggleChange): void {
    this.activeAuxReduce.set(event.value as AuxReduceOption);
  }
}
