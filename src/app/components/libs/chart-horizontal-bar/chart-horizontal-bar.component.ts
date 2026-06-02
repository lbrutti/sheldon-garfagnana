import {Component, computed, Signal} from '@angular/core';
import CardComponent from '../card/card.component';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {DynamicFilterComponent} from '../dynamic-filter/dynamic-filter.component';
import ChartBarComponent from '../chart-bar/chart-bar.component';
import {SortToggle} from '../sort-toggle/sort-toggle';
import {getRandomGradient} from '../../../utils';
import ChartLabelComponent from '../chart-label/chart-label.component';
import {CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport} from '@angular/cdk/scrolling';
import {MultiplesPipe} from '../../../pipes';
import {MatList, MatListItem} from '@angular/material/list';

@Component({
  selector: 'sheldon-chart-h-bars',
  imports: [
    CardComponent,
    MatButtonToggleGroup,
    MatButtonToggle,
    DynamicFilterComponent,
    SortToggle,
    ChartLabelComponent,
    CdkVirtualScrollViewport,
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    MultiplesPipe,
    MatList,
    MatListItem,
  ],
  templateUrl: './chart-horizontal-bar.component.html',
  styleUrl: './chart-horizontal-bar.component.scss',
})
export default class ChartHorizontalBarComponent extends ChartBarComponent {
  override gradients: Signal<string[]> = computed(() => {
    return this.data().map(d => getRandomGradient(this.categoria(), '90deg'));
  });

}
