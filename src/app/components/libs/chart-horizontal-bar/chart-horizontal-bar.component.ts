import {Component} from '@angular/core';
import TileComponent from '../tile/tile.component';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {DynamicFilterComponent} from '../dynamic-filter/dynamic-filter.component';
import ChartBarComponent from '../chart-bar/chart-bar.component';
import {SortToggle} from '../sort-toggle/sort-toggle';

@Component({
  selector: 'sheldon-chart-h-bars',
  imports: [
    TileComponent,
    MatButtonToggleGroup,
    MatButtonToggle,
    DynamicFilterComponent,
    SortToggle,
  ],
  templateUrl: './chart-horizontal-bar.component.html',
  styleUrl: './chart-horizontal-bar.component.scss',
})
export default class ChartHorizontalBarComponent extends ChartBarComponent {}
