import {Component, computed, effect, input, signal, untracked} from '@angular/core';
import {
  GeoJSONSourceComponent,
  LayerComponent,
  MapComponent,
  PopupComponent
} from '@maplibre/ngx-maplibre-gl';
import type {Feature, FeatureCollection, Point, Polygon} from 'geojson';
import type {Map as MapGL, MapLayerMouseEvent} from 'maplibre-gl';
import {DynamicFilterComponent} from '../dynamic-filter/dynamic-filter.component';
import {TranslocoModule} from '@jsverse/transloco';
import SheldonMosaicMapComponent from '../sheldon-mosaic-map/sheldon-mosaic-map.component';
import {InterventoInterface} from '../../../interfaces';
import MapTooltipComponent from '../map-tooltip/map-tooltip.component';
import {
  BoundingBox,
  boundingBoxOfRing,
  clampPointToCells,
  jitterOverlappingPoints,
  normalizzaStringa,
  resolveColorVariable,
} from '../../../utils';

/** Pixel size of the `interventi-square` icon image (see `onMapLoad`). */
const INTERVENTI_ICON_BASE_PX = 20;
/** Matches the `icon-size` interpolation on the `interventi-circles` layer in the template. */
const INTERVENTI_ICON_SIZE_STOPS: [number, number][] = [[8, 0.4], [14, 0.8]];
/** Extra spacing beyond exact edge-to-edge contact, so markers never just barely touch. */
const INTERVENTI_JITTER_MARGIN = 1.25;

/** Rendered icon size (in the layer's `icon-size` units) at a given zoom, per the layer's interpolation. */
function interventiIconSizeAtZoom(zoom: number): number {
  const [[z0, s0], [z1, s1]] = INTERVENTI_ICON_SIZE_STOPS;
  if (zoom <= z0) return s0;
  if (zoom >= z1) return s1;
  return s0 + ((zoom - z0) * (s1 - s0)) / (z1 - z0);
}

/** Ground distance (meters) covered by one screen pixel at a given zoom/latitude (Web Mercator). */
function metersPerPixel(latitude: number, zoom: number): number {
  return (156543.03392 * Math.cos((latitude * Math.PI) / 180)) / Math.pow(2, zoom);
}

@Component({
  selector: 'sheldon-interventi-map',
  standalone: true,
  imports: [

    DynamicFilterComponent,
    MapComponent,
    GeoJSONSourceComponent,
    LayerComponent,

    TranslocoModule,
    PopupComponent,
    MapTooltipComponent,
  ],
  templateUrl: './sheldon-interventi-map.component.html',
  styleUrl: './sheldon-interventi-map.component.scss',
})
export default class SheldonInterventiMapComponent extends SheldonMosaicMapComponent {

  interventi = input<InterventoInterface[]>([]);

  protected override fitBoundsPadding = {top: 110};

  constructor() {
    super();
    // Master filters (Unione/comune/categoria) narrow `interventi` — if the currently
    // tooltipped feature falls out of the new set, its tooltip must close.
    effect(() => {
      const currentInterventi = this.interventi();
      untracked(() => {
        const hovered = this.hoveredIntervento();
        if (!hovered) return;
        const id = hovered.properties?.['id'];
        const stillVisible = currentInterventi.some((i) => i.id === id);
        if (!stillVisible) this.onInterventiLeave();
      });
    });
  }

  override onMapLoad(map: MapGL): void {
    super.onMapLoad(map);
    const size = 20;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, size, size);
    map.addImage('interventi-square', ctx.getImageData(0, 0, size, size), {sdf: true});
  }

  hoveredIntervento = signal<Feature<Point> | null>(null);

  tooltipPolygonColor = computed<string>(() => {
    const categoria = this.hoveredIntervento()?.properties?.['categoria'] as string | undefined;
    if (!categoria) return this.tooltipBackground;
    return resolveColorVariable(`--color-gradient-${normalizzaStringa(categoria)}-end`);
  });

  onInterventiEnter(event: MapLayerMouseEvent): void {
    if (!this.mapInstance || !event.features?.length) return;
    const feature = event.features[0] as unknown as Feature<Point>;
    this.hoveredIntervento.set(feature);
    this.mapInstance.getCanvas().style.cursor = 'pointer';
  }

  onInterventiLeave(): void {
    this.hoveredIntervento.set(null);
    if (this.mapInstance) this.mapInstance.getCanvas().style.cursor = '';
  }

  interventiIconPaint = computed(() => {
    if (this.theme() === 'light') {
      return {'icon-color': '#000', 'icon-opacity': 1};
    }
    return {
      'icon-color': ['case', ['==', ['get', '_polygonRawValue'], 0], '#000000', '#ffffff'] as any,
      'icon-opacity': 0.9,
    };
  });

  interventiFeatures = computed<FeatureCollection<Point>>(() => {
    const comuneFilter = this.selectedComune();
    const key = this.municipalityKey();
    const rawValueByComune = new Map<string, number>();
    // Each comune is a set of axis-aligned mosaic-grid cells (see comuni.polygons.grid.*.geojson) —
    // collected here so jittered markers can be clamped back into their own comune's cells
    // afterwards, rather than drifting into a neighbor's.
    const cellsByComune = new Map<string, BoundingBox[]>();
    for (const f of this.derivedPolygons().features) {
      const comuneName = String(f.properties?.[key] ?? '');
      rawValueByComune.set(comuneName, (f.properties?.['_rawValue'] as number) ?? 0);
      const cells = cellsByComune.get(comuneName) ?? [];
      cells.push(boundingBoxOfRing(f.geometry.coordinates[0] as [number, number][]));
      cellsByComune.set(comuneName, cells);
    }
    // CSV fields come through as strings regardless of the `number` type on
    // InterventoInterface (Papa.parse is called without dynamicTyping in
    // data.adapter.ts) — coerce explicitly, otherwise `avgLat`'s reduce below
    // does string concatenation instead of addition, silently producing NaN.
    const filtered = this.interventi()
      .filter((i) => i.lat != null && i.long != null)
      .filter((i) => !comuneFilter || i.comune === comuneFilter)
      .map((i) => ({...i, lat: Number(i.lat), long: Number(i.long)}));

    // Size the jitter against the *current* zoom rather than a fixed worst-case: markers
    // only need as much separation as the icon actually occupies on screen right now, and
    // re-deriving this as the user zooms (currentZoom is rAF-throttled, updated on every
    // map move) keeps jittered markers as close to their real position as the view allows,
    // instead of over-separating them for a more-zoomed-out view they aren't even at.
    const zoom = this.mapReady() ? this.currentZoom() : INTERVENTI_ICON_SIZE_STOPS[0][0];
    const avgLat = filtered.length
      ? filtered.reduce((sum, i) => sum + i.lat, 0) / filtered.length
      : 44;
    const iconDiameterPx = INTERVENTI_ICON_BASE_PX * interventiIconSizeAtZoom(zoom);
    const radiusMeters =
      iconDiameterPx * INTERVENTI_JITTER_MARGIN * metersPerPixel(avgLat, zoom);

    const jitteredCoordinates = jitterOverlappingPoints(
      filtered.map((i) => [i.long, i.lat] as [number, number]),
      radiusMeters,
    ).map((coordinate, index) =>
      clampPointToCells(coordinate, cellsByComune.get(filtered[index].comune) ?? []),
    );
    return {
      type: 'FeatureCollection',
      features: filtered.map((i, index) => ({
        type: 'Feature',
        geometry: {type: 'Point', coordinates: jitteredCoordinates[index]},
        properties: {
          id: i.id,
          nome: i.nome,
          comune: i.comune,
          categoria: i.categoria,
          stato: i.stato,
          importoTotale: i.importoTotale,
          descrizione: i.descrizione,
          link: i.link,
          _polygonRawValue: rawValueByComune.get(i.comune) ?? 0,
        },
      })),
    };
  });
}
