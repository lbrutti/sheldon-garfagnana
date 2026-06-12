import {Component, computed, input, signal} from '@angular/core';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {GeoJSONSourceComponent, LayerComponent, MapComponent, PopupComponent} from '@maplibre/ngx-maplibre-gl';
import type {Feature, FeatureCollection, Point} from 'geojson';
import type {Map, MapLayerMouseEvent} from 'maplibre-gl';
import CardComponent from '../card/card.component';
import {DynamicFilterComponent} from '../dynamic-filter/dynamic-filter.component';
import {TranslocoModule} from '@jsverse/transloco';
import SheldonMosaicMapComponent from '../sheldon-mosaic-map/sheldon-mosaic-map.component';
import {InterventoInterface} from '../../../interfaces';
import {MatIcon} from '@angular/material/icon';

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
    MatIcon,
  ],
  templateUrl: './sheldon-interventi-map.component.html',
  styleUrl: './sheldon-interventi-map.component.scss',
})
export default class SheldonInterventiMapComponent extends SheldonMosaicMapComponent {

  interventi = input<InterventoInterface[]>([]);

  protected override fitBoundsPadding = {top: 110};

  override onMapLoad(map: Map): void {
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

  protected readonly formatter = new Intl.NumberFormat(navigator.language);

  hoveredIntervento = signal<Feature<Point> | null>(null);

  tooltipPolygonColor = computed<string>(() => {
    const comune = this.hoveredIntervento()?.properties?.['comune'] as string | undefined;
    if (!comune) return this.tooltipBackground;
    const feature = this.derivedPolygons().features.find(
      (f) => f.properties?.[this.municipalityKey()] === comune,
    );
    if (!feature) return this.tooltipBackground;
    const rawValue = (feature.properties?.['_rawValue'] as number) ?? 0;
    const shades = this.colorShades();
    if (rawValue === 0) return '#ffffff';
    if (rawValue < 2) return shades[1];
    if (rawValue < 4) return shades[2];
    return shades[3];
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

  interventiFeatures = computed<FeatureCollection<Point>>(() => {
    const comuneFilter = this.selectedComune();
    console.log(this.interventi());
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
            link: i.link
          },
        })),
    };
  });
}
