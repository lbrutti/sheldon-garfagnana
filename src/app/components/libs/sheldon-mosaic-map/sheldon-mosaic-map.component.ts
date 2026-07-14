import {
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  input,
  OnDestroy,
  OnInit,
  output,
  signal,
  untracked,
} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatButtonToggle, MatButtonToggleChange, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {GeoJSONSourceComponent, LayerComponent, MapComponent} from '@maplibre/ngx-maplibre-gl';
import type {Feature, FeatureCollection, LineString, Point, Polygon} from 'geojson';
import type {
  Map,
  MapLayerMouseEvent,
  MapLibreEvent,
  MapLibreZoomEvent,
  PaddingOptions,
  StyleSpecification
} from 'maplibre-gl';

import CardComponent from '../card/card.component';
import {DynamicFilterComponent} from '../dynamic-filter/dynamic-filter.component';
import {AuxReduceOption, FilterOptionInterface} from '../../../interfaces';
import {MultiplesPipe} from '../../../pipes';
import {getRandomGradient, normalizzaStringa, resolveColorVariable} from '../../../utils';
import {ThemeService} from '../../../services/theme.service';
import {TranslocoModule} from '@jsverse/transloco';

const EMPTY_COLLECTION: FeatureCollection = {type: 'FeatureCollection', features: []};

const MAP_ZOOM_OUT_DELTA = 1.5;
const MAP_ZOOM_IN_DELTA = 2.5;
/** Extra grid cells drawn beyond the visible viewport on each side. */
const GRID_VIEWPORT_MARGIN_CELLS = 2;

const MAP_STYLE: StyleSpecification = {
  version: 8,
  glyphs: 'https://protomaps.github.io/basemaps-assets/fonts/{fontstack}/{range}.pbf',
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

const MERCATOR_HALF_WORLD = 20037508.342789244;

function lngLatToMercator(lng: number, lat: number): [number, number] {
  const x = (lng * MERCATOR_HALF_WORLD) / 180;
  const latRad = (lat * Math.PI) / 180;
  const y = Math.log(Math.tan(Math.PI / 4 + latRad / 2)) * (MERCATOR_HALF_WORLD / Math.PI);
  return [x, y];
}

function mercatorToLngLat(x: number, y: number): [number, number] {
  const lng = (x * 180) / MERCATOR_HALF_WORLD;
  const latRad = 2 * Math.atan(Math.exp((y * Math.PI) / MERCATOR_HALF_WORLD)) - Math.PI / 2;
  const lat = (latRad * 180) / Math.PI;
  return [lng, lat];
}

/** Picks a round step size for ~targetLines divisions across span (meters in Web Mercator). */
function niceGridStep(span: number, targetLines = 10): number {
  const raw = span / targetLines;
  const magnitude = Math.pow(10, Math.floor(Math.log10(raw)));
  const normalized = raw / magnitude;
  const nice = normalized <= 1 ? 1 : normalized <= 2 ? 2 : normalized <= 5 ? 5 : 10;
  return nice * magnitude;
}

/** Square grid in Web Mercator — equal X/Y spacing renders as square cells on the map. */
function buildGridGeoJsonFromMercatorBounds(
  minX: number,
  maxX: number,
  minY: number,
  maxY: number,
  step: number,
): FeatureCollection<LineString> {
  const features: Feature<LineString>[] = [];

  for (let x = Math.floor(minX / step) * step; x <= maxX; x += step) {
    features.push({
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates: [mercatorToLngLat(x, minY), mercatorToLngLat(x, maxY)],
      },
      properties: {},
    });
  }

  for (let y = Math.floor(minY / step) * step; y <= maxY; y += step) {
    features.push({
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates: [mercatorToLngLat(minX, y), mercatorToLngLat(maxX, y)],
      },
      properties: {},
    });
  }

  return {type: 'FeatureCollection', features};
}

function mercatorBoundsFromLngLatBbox(bbox: [[number, number], [number, number]]): {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
} {
  const [[minLng, minLat], [maxLng, maxLat]] = bbox;
  const corners = [
    lngLatToMercator(minLng, minLat),
    lngLatToMercator(maxLng, minLat),
    lngLatToMercator(minLng, maxLat),
    lngLatToMercator(maxLng, maxLat),
  ];

  return {
    minX: Math.min(...corners.map(([x]) => x)),
    maxX: Math.max(...corners.map(([x]) => x)),
    minY: Math.min(...corners.map(([, y]) => y)),
    maxY: Math.max(...corners.map(([, y]) => y)),
  };
}

/** Grid aligned to the viewport — always covers the full visible area plus a small margin. */
function buildGridGeoJsonForViewport(
  visibleBbox: [[number, number], [number, number]],
  marginCells = GRID_VIEWPORT_MARGIN_CELLS,
): FeatureCollection<LineString> {
  const visible = mercatorBoundsFromLngLatBbox(visibleBbox);
  const step = niceGridStep(Math.min(visible.maxX - visible.minX, visible.maxY - visible.minY));
  const margin = marginCells * step;

  return buildGridGeoJsonFromMercatorBounds(
    Math.floor(visible.minX / step) * step - margin,
    Math.ceil(visible.maxX / step) * step + margin,
    Math.floor(visible.minY / step) * step - margin,
    Math.ceil(visible.maxY / step) * step + margin,
    step,
  );
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
    TranslocoModule,
  ],
  templateUrl: './sheldon-mosaic-map.component.html',
  styleUrl: './sheldon-mosaic-map.component.scss',
})
export default class SheldonMosaicMapComponent implements OnInit, OnDestroy {

  // ── Inputs ─────────────────────────────────────────────────────────────────
  title = input<string>('');
  infoText = input<string>('');
  cardId = input<string>('');
  data = input<FeatureCollection<Polygon> | null>(null);
  auxReduce = input<AuxReduceOption[]>([]);
  municipalityKey = input<string>('comune');
  tooltipProperties = input<{ property: string, label: string }[]>([]);
  categoria = input<string>('ambiente');

  // ── Outputs ────────────────────────────────────────────────────────────────
  polygonHover = output<Feature<Polygon>>();

  // ── Public constants for template ─────────────────────────────────────────
  readonly mapStyle = MAP_STYLE;
  readonly gridLinePaint = {
    'line-color': '#b0aeae',
    'line-width': 1,
  };

  // Track the active theme so the choropleth shades re-read their CSS variables on change.
  protected readonly theme = inject(ThemeService).theme;
  private readonly elRef = inject(ElementRef<HTMLElement>);
  private readonly http = inject(HttpClient);

  // ── Mosaic GeoJSON (loaded internally) ────────────────────────────────────
  mosaicComuni = signal<FeatureCollection<Polygon> | null>(null);
  mosaicToscana = signal<FeatureCollection<Polygon> | null>(null);

  // ── State ──────────────────────────────────────────────────────────────────
  mapReady = signal(false);
  mapMinZoom = signal(0);
  mapMaxZoom = signal(22);
  activeAuxReduce = signal<AuxReduceOption | null>(null);
  protected selectedComune = signal<string | null>(null);
  private isHovering = signal(false);
  hoveredFeature = signal<Feature<Polygon> | null>(null);
  tooltipPos = signal<{ x: number; y: number } | null>(null);

  protected mapInstance: Map | null = null;
  private hoveredFeatureId: string | number | null = null;
  private pinnedFeature: Feature<Polygon> | null = null;
  private pinnedTooltipPos: { x: number; y: number } | null = null;
  private resizeObserver: ResizeObserver | null = null;
  private gridRefreshPending = false;
  private readonly onMapMove = (): void => {
    if (this.gridRefreshPending) return;
    this.gridRefreshPending = true;
    requestAnimationFrame(() => {
      this.gridRefreshPending = false;
      this.refreshGrid();
    });
  };

  /** Grid lines — regenerated from the current viewport. */
  gridGeoJson = signal<FeatureCollection<LineString>>(
    EMPTY_COLLECTION as FeatureCollection<LineString>,
  );

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

  /** Mosaic tiles with `_rawValue` injected per tile (looked up by properties.name). */
  derivedPolygons = computed<FeatureCollection<Polygon>>(() => {
    const mosaic = this.mosaicComuni();
    if (!mosaic) return EMPTY_COLLECTION as FeatureCollection<Polygon>;
    const rawVals = this.comuneValues();
    return {
      ...mosaic,
      features: mosaic.features.map((f) => ({
        ...f,
        properties: {
          ...f.properties,
          _rawValue: rawVals[String(f.properties?.['name'] ?? '')] ?? 0,
        },
      })),
    };
  });

  /** One Point feature per unique municipality at the centroid of all its mosaic tiles. */
  comuniCentroids = computed<FeatureCollection<Point>>(() => {
    const mosaic = this.mosaicComuni();
    if (!mosaic) return EMPTY_COLLECTION as FeatureCollection<Point>;
    const acc: Record<string, { sumX: number; sumY: number; count: number }> = {};
    for (const f of mosaic.features) {
      const name = String(f.properties?.['name'] ?? '');
      if (!name) continue;
      for (const [x, y] of f.geometry.coordinates[0] as [number, number][]) {
        if (!acc[name]) acc[name] = {sumX: 0, sumY: 0, count: 0};
        acc[name].sumX += x;
        acc[name].sumY += y;
        acc[name].count++;
      }
    }
    return {
      type: 'FeatureCollection',
      features: Object.entries(acc).map(([name, {sumX, sumY, count}]) => ({
        type: 'Feature' as const,
        geometry: {type: 'Point' as const, coordinates: [sumX / count, sumY / count]},
        properties: {name},
      })),
    };
  });

  readonly legendLabels = ['0', '<2', '<4', '4+'];

  /** 4 tints of the categoria start color: ranges 0 / <2 / <4 / >=4. */
  colorShades = computed<[string, string, string, string]>(() => {
    this.theme();
    const categoria = normalizzaStringa(this.categoria());
    let baseColor = this.theme() === 'light' ? resolveColorVariable(`--color-gradient-${categoria}-start`) : '#000';
    if (baseColor === '#000') {
      baseColor = '#1d1d1d';
    }
    this.tooltipGradient = getRandomGradient(this.categoria(), '90deg', this.theme());
    this.tooltipBackground = resolveColorVariable(`--color-gradient-${categoria}-end`)
    return generateGradientShades(baseColor);
  });

  /** Max-range shade — used for zero-value polygon stroke and legend swatch. */
  readonly maxColorShade = computed(() => this.colorShades()[3]);

  /** MapLibre step expression mapping _rawValue to the 4 choropleth shades. */
  private choroplethColorExpr = computed((): any[] => {
    const [, s1, s2, s3] = this.colorShades();
    // s1 → 0<v<2 | s2 → 2≤v<4 | s3 → v≥4 (value=0 handled separately as stroke-only)
    return ['step', ['get', '_rawValue'], s1, 0.0001, s1, 2, s2, 4, s3];
  });

  /** White fill for zero values; choropleth fill otherwise. */
  private choroplethFillExpr = computed((): any[] => {
    return ['case', ['==', ['get', '_rawValue'], 0], '#ffffff', this.choroplethColorExpr()];
  });

  readonly zeroValueFilter = ['==', ['get', '_rawValue'], 0] as any;

  /** 1px outline for zero-value comuni using the max-range shade. */
  comuniZeroLinePaint = computed(() => ({
    'line-color': this.maxColorShade(),
    'line-width': 1,
  }));

  /** Fill layer paint with choropleth colors and hover/filter state. */
  comuniFillPaint = computed(() => {
    const sel = this.selectedComune();
    const key = this.municipalityKey();
    const hovering = this.isHovering();
    const fillColor = this.choroplethFillExpr();
    const filteredOutline = this.maxColorShade();

    // Filter active: selected keeps choropleth color, others show zero-range shade at full opacity
    if (sel) {
      return {
        'fill-outline-color': [
          'case',
          ['==', ['get', key], sel],
          'transparent',
          filteredOutline
        ] as any,
        'fill-color': ['case', ['==', ['get', key], sel], fillColor, 'transparent'] as any,
        'fill-opacity': 1.0 as any,
      };
    }

    // Hover active: all polygons keep choropleth color, non-hovered dim to 0.8
    if (hovering) {
      return {
        'fill-outline-color': 'transparent' as any,
        'fill-color': fillColor as any,
        'fill-opacity': ['case', ['boolean', ['feature-state', 'hover'], false], 1.0, 0.8] as any,
      };
    }

    return {
      'fill-outline-color': 'transparent' as any,
      'fill-color': fillColor as any,
      'fill-opacity': 1.0 as any,
    };
  });

  readonly toscanaFillPaint = {'fill-color': '#e8e4e0', 'fill-opacity': 0.6};
  readonly labelLayout = {
    'text-field': ['get', 'name'] as any,
    'text-font': ['Noto Sans Regular'],
    'text-size': 10,
    'text-anchor': 'center' as const,
    'text-max-width': 7,
    'text-allow-overlap': false,
  };
  readonly labelPaint = {'text-color': '#333333', 'text-halo-color': '#ffffff', 'text-halo-width': 1.5};

  /** Bounding box of the mosaic FeatureCollection expanded by 10% on each side. */
  private collectionBbox = computed<[[number, number], [number, number]] | null>(() => {
    const fc = this.mosaicComuni();
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

  protected tooltipBackground: string;

  protected fitBoundsPadding: number | PaddingOptions = 0;

  constructor() {
    effect(() => {
      const bb = this.collectionBbox();
      if (!bb || !this.mapReady()) return;
      const map = untracked(() => this.mapInstance);
      if (!map) return;
      map.fitBounds(bb, {animate: false, padding: this.fitBoundsPadding});
      this.applyZoomLimits(map);
      this.refreshGrid();
    });
  }

  private applyZoomLimits(map: Map): void {
    const homeZoom = map.getZoom();
    const minZoom = Math.max(0, homeZoom - MAP_ZOOM_OUT_DELTA);
    const maxZoom = homeZoom + MAP_ZOOM_IN_DELTA;

    map.setMinZoom(minZoom);
    map.setMaxZoom(maxZoom);
    this.mapMinZoom.set(minZoom);
    this.mapMaxZoom.set(maxZoom);
  }

  ngOnInit(): void {
    if (this.auxReduce().length) {
      this.activeAuxReduce.set(this.auxReduce()[0]);
    }
    this.resizeObserver = new ResizeObserver(() => {
      this.mapInstance?.resize();
      this.refreshGrid();
    });
    this.resizeObserver.observe(this.elRef.nativeElement);

    this.http.get<FeatureCollection<Polygon>>('data/comuni.polygons.grid.focus.geojson').subscribe(
      fc => this.mosaicComuni.set(fc),
    );
    this.http.get<FeatureCollection<Polygon>>('data/comuni.polygons.grid.toscana.geojson').subscribe(
      fc => this.mosaicToscana.set(fc),
    );
  }

  ngOnDestroy(): void {
    this.mapInstance?.off('move', this.onMapMove);
    this.resizeObserver?.disconnect();
  }

  protected refreshGrid(): void {
    const map = this.mapInstance;
    if (!map) return;

    const bounds = map.getBounds();
    const sw = bounds.getSouthWest();
    const ne = bounds.getNorthEast();
    const visibleBbox: [[number, number], [number, number]] = [
      [sw.lng, sw.lat],
      [ne.lng, ne.lat],
    ];

    this.gridGeoJson.set(buildGridGeoJsonForViewport(visibleBbox));
  }

  // ── Map lifecycle ──────────────────────────────────────────────────────────

  onMapLoad(map: Map): void {
    this.mapInstance = map;
    map.resize();
    map.on('move', this.onMapMove);
    this.mapReady.set(true);
    this.refreshGrid();
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

    this.hoveredFeature.set(this.enrichWithData(feature));
    this.tooltipPos.set({x: event.point.x, y: event.point.y});
    map.getCanvas().style.cursor = 'pointer';
    this.polygonHover.emit(feature);
  }

  /** Merge data() properties onto a mosaic tile feature so the tooltip can read them. */
  private enrichWithData(feature: Feature<Polygon>): Feature<Polygon> {
    const name = String(feature.properties?.['name'] ?? '');
    const dataFeature = this.data()?.features.find(
      (f) => String(f.properties?.[this.municipalityKey()]) === name,
    );
    if (!dataFeature) return feature;
    return {...feature, properties: {...dataFeature.properties, ...feature.properties}};
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

    // Use the data() feature for tooltip properties; mosaic only for geometry when needed.
    const feature = this.data()?.features.find(
      (f) => String(f.properties?.[this.municipalityKey()]) === value,
    );
    if (feature && this.mapInstance) {
      const coords = feature.geometry.coordinates[0] as [number, number][];
      const lng = coords.reduce((sum, c) => sum + c[0], 0) / coords.length;
      const lat = coords.reduce((sum, c) => sum + c[1], 0) / coords.length;
      const point = this.mapInstance.project([lng, lat]);

      if (this.hoveredFeatureId !== null) {
        this.mapInstance.setFeatureState({source: 'comuni', id: this.hoveredFeatureId}, {hover: false});
      }
      // With promoteId='name', the feature ID is the name string.
      this.hoveredFeatureId = value;
      this.mapInstance.setFeatureState({source: 'comuni', id: this.hoveredFeatureId}, {hover: true});

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

  protected tooltipGradient: string;
}
