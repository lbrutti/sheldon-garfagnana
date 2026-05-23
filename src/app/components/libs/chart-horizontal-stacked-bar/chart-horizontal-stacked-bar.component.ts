import {Component, computed, Signal,} from '@angular/core';
import {Chart, ChartConfiguration, ChartData} from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(annotationPlugin);

import CardComponent from '../card/card.component';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {MatIcon} from '@angular/material/icon';
import {BaseChartDirective} from 'ng2-charts';

import {DynamicFilterComponent} from '../dynamic-filter/dynamic-filter.component';
import ChartVerticalBarComponent from '../chart-vertical-bar/chart-vertical-bar.component';
import {getReducedValueByLabel} from '../../../utils';

@Component({
  selector: 'sheldon-chart-h-stacked-bars',
  imports: [
    CardComponent,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatIcon,
    BaseChartDirective,
    DynamicFilterComponent
  ],
  templateUrl: './chart-horizontal-stacked-bar.component.html',
  styleUrl: './chart-horizontal-stacked-bar.component.scss',
})
export default class ChartHorizontalStackedBarComponent extends ChartVerticalBarComponent {


  override chartData: Signal<ChartData<'bar'>> = computed(() => {
    const filterSet = this.appliedFilters().length && this.appliedFilters().some(d => d.value);
    const filteredData = filterSet ? this.data().filter(d => {
      const guard = filterSet ? (this.appliedFilters().every(filter => {
        return filter.value.length && (filter.value === (d as any)[filter.key]);
      })) : true;
      return guard;
    }) : this.data();
    const grouped = Object.groupBy(filteredData, (p: any) => p[this.groupBy()]);
    let groupKeys = this.getGroupedKeys(grouped);
    let dataset: any = [];
    groupKeys.map(label => {
      const reducedValue = getReducedValueByLabel(grouped, label, this.reduceBy());
      dataset.push(reducedValue);
    });
    return {labels: groupKeys, datasets: [{data: dataset}]};
  });

  override annotationsSignal: Signal<any> = computed(() => {
    const annotations: any = {};
    this.chartData().labels.forEach((label, i) => {
      annotations[`label_${i}`] = {
        type: 'label',
        yValue: label,
        textAlign: 'left',   // text grows rightward from the anchor point
        xValue: 0,
        xAdjust: 8,
        content: label,
        backgroundColor: 'transparent',
        color: 'red',
        position: {x: 'start', y: 'center'}, // anchor box from its left edge
      };
      const value = this.chartData().datasets[0].data[i];
      annotations[`count_${i}`] = {
        type: 'label',
        yValue: label,
        xValue: (ctx: any) => ctx.chart.scales.x.max,
        xAdjust: -10,
        content: value,
        backgroundColor: 'transparent',
        color: 'red',
        textAlign: 'right',
        position: {x: 'end', y: 'center'}, // anchor box from its left edge
      };
    });

    return annotations;
  });

  public override barChartOptions: Signal<ChartConfiguration<'bar'>['options']> = computed(() => {
    return {
      //set bars horizontally
      indexAxis: 'y',
      // We use these empty structures as placeholders for dynamic theming.
      scales: {
        x: {
          display: true,
          stacked: true

        },
        y: {
          display: false,
          stacked: true
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        annotation: {
          clip: true, // <-- critical: clips annotations to the chart area
          annotations: this.annotationsSignal()
        },
      }
    };
  });

}
