import {
  Component,
  computed,
  effect,
  ElementRef,
  input,
  NgZone,
  OnInit,
  output,
  signal,
  untracked,
  ViewChild,
} from '@angular/core';
import {DecimalPipe} from '@angular/common';
import {MatButtonToggle, MatButtonToggleChange, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {GeoJSONSourceComponent, LayerComponent, MapComponent} from '@maplibre/ngx-maplibre-gl';
import type {Feature, FeatureCollection, Point, Polygon} from 'geojson';
//aliased to avoid type collision with ES Map constructor
import type {Map as MglMap} from 'maplibre-gl';

import type {MapLayerMouseEvent, StyleSpecification} from 'maplibre-gl';
import {MercatorCoordinate} from 'maplibre-gl';

import CardComponent from '../card/card.component';
import {DynamicFilterComponent} from '../dynamic-filter/dynamic-filter.component';
import {AuxReduceOption, ColorStop, FilterOptionInterface} from '../../../interfaces';
import {EventData} from '@angular/cdk/testing';

// ── Constants ────────────────────────────────────────────────────────────────

const DLON = 0.006; // grid longitude step (degrees)
const DLAT = 0.004; // grid latitude step (degrees)
// Each rect fills CELL_FILL of its grid cell — the remainder (1−CELL_FILL)/2 per side
// becomes visible "grout" between mosaic tiles.
const CELL_FILL = 0.75;

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
      paint: {'raster-opacity': 0.25, 'raster-saturation': -1, 'raster-brightness-max': 0.28},
    },
  ],
};

// ── Helpers ───────────────────────────────────────────────────────────────────

function lerpHex(a: string, b: string, t: number): string {
  const p = (h: string, o: number) => parseInt(h.slice(o, o + 2), 16);
  const hex = (v: number) => Math.round(v).toString(16).padStart(2, '0');
  return (
    '#' +
    hex(p(a, 1) + (p(b, 1) - p(a, 1)) * t) +
    hex(p(a, 3) + (p(b, 3) - p(a, 3)) * t) +
    hex(p(a, 5) + (p(b, 5) - p(a, 5)) * t)
  );
}

function interpolateColor(value: number, stops: ColorStop[]): string {
  if (!stops.length) return '#000';
  if (value <= stops[0].value) return stops[0].color;
  const last = stops[stops.length - 1];
  if (value >= last.value) return last.color;
  for (let i = 0; i < stops.length - 1; i++) {
    const lo = stops[i], hi = stops[i + 1];
    if (value <= hi.value) return lerpHex(lo.color, hi.color, (value - lo.value) / (hi.value - lo.value));
  }
  return last.color;
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

// ── SVG data model ────────────────────────────────────────────────────────────

interface SvgRect {
  id: string;
  mx: number; // left edge in Mercator coords
  my: number; // top edge in Mercator coords
  mw: number; // width in Mercator coords
  mh: number; // height in Mercator coords
  fill: string;
}

interface SvgGroup {
  comune: string;
  unione: string;
  rects: SvgRect[];
}

// ── Component ─────────────────────────────────────────────────────────────────

@Component({
  selector: 'sheldon-mosaic-map-svg',
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
  templateUrl: './sheldon-mosaic-map-svg.component.html',
  styleUrl: './sheldon-mosaic-map-svg.component.scss',
})
export default class SheldonMosaicMapSvgComponent implements OnInit {
  @ViewChild('legendCanvas') legendCanvas?: ElementRef<HTMLCanvasElement>;
  @ViewChild('svgGroup') svgGroupRef?: ElementRef<SVGGElement>;

  // ── Inputs ──────────────────────────────────────────────────────────────────
  title = input<string>('Mappa');
  polygons = input<FeatureCollection<Polygon> | null>(null);
  points = input<FeatureCollection<Point> | null>(null);
  auxReduce = input<AuxReduceOption[]>([]);
  colorSetting = input<ColorStop[]>(DEFAULT_COLOR_STOPS);
  municipalityKey = input<string>('comune');

  // ── Outputs ─────────────────────────────────────────────────────────────────
  polygonHover = output<Feature<Polygon>>();

  // ── Public state ─────────────────────────────────────────────────────────────
  readonly mapStyle = MAP_STYLE;
  readonly emptyCollection = EMPTY_COLLECTION;
  mapReady = signal(false);
  activeAuxReduce = signal<AuxReduceOption | null>(null);
  svgGroups = signal<SvgGroup[]>([]);
  hoveredFeature = signal<Feature<Polygon> | null>(null);
  tooltipPos = signal<{ x: number; y: number } | null>(null);

  private selectedComune = signal<string | null>(null);
  private mapInstance: MglMap | null = null;
  private hoveredFeatureId: string | number | null = null;

  // ── Computed ─────────────────────────────────────────────────────────────────

  comuniDataset = computed(() => {
    const key = this.municipalityKey();
    return (this.polygons()?.features ?? []).map((f) => ({
      comune: String(f.properties?.[key] ?? ''),
      valore: 0 as number,
    }));
  });

  private comuneValues = computed<Record<string, number>>(() => {
    const opt = this.activeAuxReduce();
    if (!opt) return {};
    const key = this.municipalityKey();
    const grouped: Record<string, number[]> = {};
    for (const f of this.polygons()?.features ?? []) {
      const comune = String(f.properties?.[key] ?? '');
      if (!comune) continue;
      (grouped[comune] ??= []).push(Number(f.properties?.[opt.campo] ?? 0));
    }
    const out: Record<string, number> = {};
    for (const [k, vals] of Object.entries(grouped)) out[k] = reduceValues(vals, opt.reduceBy);
    return out;
  });

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

  private derivedPoints = computed<FeatureCollection>(() => {
    const pts = this.points();
    if (!pts) return EMPTY_COLLECTION;
    const norm = this.normalizedValues();
    const key = this.municipalityKey();
    return {
      ...pts,
      features: pts.features.map((f) => ({
        ...f,
        properties: {
          ...f.properties,
          _colorValue: norm[String(f.properties?.[key] ?? '')] ?? 0,
        },
      })),
    };
  });

  comuniFillPaint = computed(() => {
    const sel = this.selectedComune();
    const key = this.municipalityKey();
    const conditions: any[] = ['case'];
    if (sel) conditions.push(['==', ['get', key], sel], 0.35);
    conditions.push(['boolean', ['feature-state', 'hover'], false], 0.15, 0);
    return {'fill-color': '#4a9eff', 'fill-opacity': conditions as any};
  });

  selectedFilter = computed<any>(() => {
    const key = this.municipalityKey();
    return this.selectedComune()
      ? ['==', ['get', key], this.selectedComune()]
      : ['==', ['get', key], '__none__'];
  });

  legendMin = computed(() => {
    const vals = Object.values(this.comuneValues());
    return vals.length ? Math.min(...vals) : 0;
  });

  legendMax = computed(() => {
    const vals = Object.values(this.comuneValues());
    return vals.length ? Math.max(...vals) : 0;
  });

  hoveredValue = computed(() => {
    const f = this.hoveredFeature();
    if (!f) return null;
    return this.comuneValues()[String(f.properties?.[this.municipalityKey()] ?? '')] ?? null;
  });

  constructor(private zone: NgZone) {
    // Recompute SVG groups whenever point data, colour stops, or key changes.
    effect(() => {
      const pts = this.derivedPoints();
      const stops = this.colorSetting();
      const key = this.municipalityKey();
      this.svgGroups.set(this.buildGroups(pts.features as Feature<Point>[], stops, key));
    });

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
    if (this.auxReduce().length) this.activeAuxReduce.set(this.auxReduce()[0]);
  }

  // ── Map lifecycle ────────────────────────────────────────────────────────────

  onMapLoad(map: MglMap): void {
    this.mapInstance = map;
    this.mapReady.set(true);
    // Update SVG transform on every frame — runs outside Angular zone (direct DOM write).
    this.zone.runOutsideAngular(() => map.on('render', () => this.updateSvgTransform()));
  }

  // ── SVG helpers ──────────────────────────────────────────────────────────────

  // Groups points by comune, computing padded Mercator rects for each.
  private buildGroups(features: Feature<Point>[], stops: ColorStop[], municipalityKey: string): SvgGroup[] {
    const map = new Map<string, SvgGroup>();

    for (const f of features) {
      const [lng, lat] = f.geometry.coordinates;
      const mc = MercatorCoordinate.fromLngLat({lng, lat});
      // Cell size in Mercator units (x linear, y latitude-dependent), shrunk by CELL_FILL
      // so each rect is visually inset from its grid boundary.
      const mw = (DLON / 360) * CELL_FILL;
      const mh = (DLAT / (360 * Math.cos((lat * Math.PI) / 180))) * CELL_FILL;
      const fill = interpolateColor((f.properties as any)['_colorValue'] ?? 0, stops);

      const comune = String(f.properties?.[municipalityKey] ?? '');
      const unione = String(f.properties?.['unione'] ?? '');

      if (!map.has(comune)) map.set(comune, {comune, unione, rects: []});
      map.get(comune)!.rects.push({id: `${lng},${lat}`, mx: mc.x - mw / 2, my: mc.y - mh / 2, mw, mh, fill});
    }

    return Array.from(map.values());
  }

  // Maps Mercator space → screen pixels via an affine matrix and writes it onto
  // the SVG <g> element directly (bypasses Angular CD, safe to call every frame).
  private updateSvgTransform(): void {
    const g = this.svgGroupRef?.nativeElement;
    const map = this.mapInstance;
    if (!g || !map) return;

    const center = map.getCenter();
    const container = map.getContainer();
    const cx_px = container.offsetWidth / 2;
    const cy_px = container.offsetHeight / 2;

    // Center in Mercator space.
    const mc = MercatorCoordinate.fromLngLat(center);

    // Project a reference point slightly east to read scale + bearing from the map.
    const REF = 0.001; // Mercator units (~0.36° at equator, fine for all zooms)
    const refPx = map.project(new MercatorCoordinate(mc.x + REF, mc.y, 0).toLngLat());

    // (a, b) = screen displacement for +1 Mercator unit eastward.
    // Mercator is conformal, so southward = rotate (a,b) by 90° → (−b, a) isn't right.
    // Actually: Mercator y increases downward (south), same as screen y, so
    // southward displacement is (−b, a) rotated 90° CW: c = −b, d = a.
    const a = (refPx.x - cx_px) / REF;
    const b = (refPx.y - cy_px) / REF;
    const e = cx_px - a * mc.x + b * mc.y;
    const f = cy_px - b * mc.x - a * mc.y;

    g.setAttribute('transform', `matrix(${a},${b},${-b},${a},${e},${f})`);
  }

  // ── Layer events ─────────────────────────────────────────────────────────────

  onPolygonEnter(event: MapLayerMouseEvent): void {
    const map = this.mapInstance;
    if (!map || !event.features?.length) return;
    const feature = event.features[0] as unknown as Feature<Polygon>;
    if (this.hoveredFeatureId !== null)
      map.setFeatureState({source: 'comuni', id: this.hoveredFeatureId}, {hover: false});
    this.hoveredFeatureId = (event.features[0].id as string | number) ?? null;
    if (this.hoveredFeatureId !== null)
      map.setFeatureState({source: 'comuni', id: this.hoveredFeatureId}, {hover: true});
    this.hoveredFeature.set(feature);
    this.tooltipPos.set({x: event.point.x, y: event.point.y});
    map.getCanvas().style.cursor = 'pointer';
    this.polygonHover.emit(feature);
  }

  onPolygonMove(event: MapLayerMouseEvent): void {
    this.tooltipPos.set({x: event.point.x, y: event.point.y});
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

  // ── Control events ───────────────────────────────────────────────────────────

  onFilterChange(filters: FilterOptionInterface[]): void {
    const comuneFilter = filters.find((f) => f.key === 'comune');
    const value = comuneFilter?.value ?? null;
    this.selectedComune.set(value);
    if (value && this.mapInstance) {
      const feature = this.polygons()?.features.find(
        (f) => String(f.properties?.[this.municipalityKey()]) === value
      );
      if (feature) this.mapInstance.fitBounds(polygonBbox(feature), {padding: 40, maxZoom: 13});
    }
  }

  onReduceChange(event: MatButtonToggleChange): void {
    this.activeAuxReduce.set(event.value as AuxReduceOption);
  }

  logZoomLevel($event: any): void {
    console.log(`current zoom : ${$event.target.getZoom()}`);
  }
}
