import {Component, computed, effect, input, signal, untracked} from '@angular/core';
import {
  GeoJSONSourceComponent,
  LayerComponent,
  MapComponent,
  PopupComponent
} from '@maplibre/ngx-maplibre-gl';
import type {Feature, FeatureCollection, Point} from 'geojson';
import type {Map as MapGL, MapLayerMouseEvent} from 'maplibre-gl';
import {DynamicFilterComponent} from '../dynamic-filter/dynamic-filter.component';
import {TranslocoModule} from '@jsverse/transloco';
import SheldonMosaicMapComponent from '../sheldon-mosaic-map/sheldon-mosaic-map.component';
import {InterventoInterface} from '../../../interfaces';
import MapTooltipComponent from '../map-tooltip/map-tooltip.component';
import {normalizzaStringa, resolveColorVariable} from '../../../utils';

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
    for (const f of this.derivedPolygons().features) {
      rawValueByComune.set(
        String(f.properties?.[key] ?? ''),
        (f.properties?.['_rawValue'] as number) ?? 0,
      );
    }
    return {
      type: 'FeatureCollection',
      features: this.interventi()
        .filter((i) => i.lat != null && i.long != null)
        .filter((i) => !comuneFilter || i.comune === comuneFilter)
        .map((i) => ({
          type: 'Feature',
          geometry: {type: 'Point', coordinates: [i.long, i.lat]},
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
