import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'sheldon-map-view',
  imports: [TranslocoModule],
  templateUrl: './map-view.html',
  styleUrl: './map-view.scss',
})
export default class MapView {}
