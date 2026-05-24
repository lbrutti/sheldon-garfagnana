import {Component, computed, Signal,} from '@angular/core';
import {Chart, ChartConfiguration} from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(annotationPlugin);

import CardComponent from '../card/card.component';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {BaseChartDirective} from 'ng2-charts';

import {DynamicFilterComponent} from '../dynamic-filter/dynamic-filter.component';
import ChartBarComponent from '../chart-bar/chart-bar.component';
import {SortToggle} from '../sort-toggle/sort-toggle';

@Component({
  selector: 'sheldon-chart-h-bars',
  imports: [
    CardComponent,
    MatButtonToggleGroup,
    MatButtonToggle,
    BaseChartDirective,
    DynamicFilterComponent,
    SortToggle
  ],
  templateUrl: './chart-horizontal-bar.component.html',
  styleUrl: './chart-horizontal-bar.component.scss',
})
export default class ChartHorizontalBarComponent extends ChartBarComponent {

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
          display: false,

        },
        y: {
          display: false,
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
