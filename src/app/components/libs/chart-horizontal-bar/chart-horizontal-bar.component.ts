import {Component, computed, Signal} from '@angular/core';
import CardComponent from '../card/card.component';
import {DynamicFilterComponent} from '../dynamic-filter/dynamic-filter.component';
import ChartBarComponent from '../chart-bar/chart-bar.component';
import {SortToggle} from '../sort-toggle/sort-toggle';
import {getRandomGradient} from '../../../utils';
import ChartLabelComponent from '../chart-label/chart-label.component';
import {MultiplesPipe} from '../../../pipes';
import ReduceToggleComponent from '../reduce-toggle/reduce-toggle';
import {TranslocoModule} from '@jsverse/transloco';
import ChartTooltipComponent from '../chart-tooltip/chart-tooltip.component';

@Component({
  selector: 'sheldon-chart-h-bars',
  imports: [
    CardComponent,
    DynamicFilterComponent,
    SortToggle,
    ChartLabelComponent,
    MultiplesPipe,
    ReduceToggleComponent,
    TranslocoModule,
    ChartTooltipComponent,
  ],
  templateUrl: './chart-horizontal-bar.component.html',
  styleUrl: './chart-horizontal-bar.component.scss',
})
export default class ChartHorizontalBarComponent extends ChartBarComponent {
  override gradients: Signal<string[]> = computed(() => {
    return this.data().map(d => getRandomGradient(this.categoria(), '90deg'));
  });

}
