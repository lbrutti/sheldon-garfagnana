import {Component, computed, input, signal} from '@angular/core';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {GeoJSONSourceComponent, LayerComponent, MapComponent} from '@maplibre/ngx-maplibre-gl';
import type {Feature, FeatureCollection, Point} from 'geojson';
import type {Map, MapLayerMouseEvent} from 'maplibre-gl';

import CardComponent from '../card/card.component';
import {DynamicFilterComponent} from '../dynamic-filter/dynamic-filter.component';
import {MultiplesPipe} from '../../../pipes';

import {TranslocoModule} from '@jsverse/transloco';
import SheldonMosaicMapComponent from '../sheldon-mosaic-map/sheldon-mosaic-map.component';
import {InterventoInterface} from '../../../interfaces/interventoInterface';

@Component({
  selector: 'sheldon-interventi-map',
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
  templateUrl: './sheldon-interventi-map.component.html',
  styleUrl: './sheldon-interventi-map.component.scss',
})
export default class SheldonInterventiMapComponent extends SheldonMosaicMapComponent {

  interventi = input<InterventoInterface[]>([]);

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

  hoveredIntervento = signal<Feature<Point> | null>(null);
  interventiTooltipPos = signal<{x: number; y: number} | null>(null);

  onInterventiEnter(event: MapLayerMouseEvent): void {
    if (!this.mapInstance || !event.features?.length) return;
    const feature = event.features[0] as unknown as Feature<Point>;
    const [lng, lat] = feature.geometry.coordinates;
    const point = this.mapInstance.project([lng, lat]);
    this.hoveredIntervento.set(feature);
    this.interventiTooltipPos.set({x: point.x, y: point.y});
    this.mapInstance.getCanvas().style.cursor = 'pointer';
  }

  onInterventiLeave(): void {
    this.hoveredIntervento.set(null);
    this.interventiTooltipPos.set(null);
    if (this.mapInstance) this.mapInstance.getCanvas().style.cursor = '';
  }

  interventiFeatures = computed<FeatureCollection<Point>>(() => {
    const comuneFilter = this.selectedComune();
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
          },
        })),
    };
  });
}
