import {
  Component,

} from '@angular/core';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {GeoJSONSourceComponent, LayerComponent, MapComponent} from '@maplibre/ngx-maplibre-gl';
import type {StyleSpecification} from 'maplibre-gl';

import CardComponent from '../card/card.component';
import {DynamicFilterComponent} from '../dynamic-filter/dynamic-filter.component';
import {AuxReduceOption} from '../../../interfaces';
import {MultiplesPipe} from '../../../pipes';

import {TranslocoModule} from '@jsverse/transloco';
import SheldonMosaicMapComponent from '../sheldon-mosaic-map/sheldon-mosaic-map.component';

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

}
