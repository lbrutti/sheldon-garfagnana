import {Component, computed, input, signal, Signal, ViewChild} from '@angular/core';
import {Chart, ChartConfiguration} from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(annotationPlugin);

import CardComponent from '../card/card.component';
import {MatButtonToggle, MatButtonToggleChange, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {MatIcon} from '@angular/material/icon';
import {DataInterface} from '../../../interfaces';
import {BaseChartDirective} from 'ng2-charts';
import {ChartData, ChartEvent} from 'chart.js';

import {DynamicFilterComponent} from '../dynamic-filter/dynamic-filter.component';

@Component({
  selector: 'sheldon-chart-v-bars',
  imports: [
    CardComponent,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatIcon,
    BaseChartDirective,
    DynamicFilterComponent
  ],
  templateUrl: './chart-vertical-bar.component.html',
  styleUrl: './chart-vertical-bar.component.scss',
})
export default class ChartVerticaleBarComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'bar'> | undefined;

  title = input<string>('Numero di progetti per comune');
  filterBy = input<string>('nome_comune');
  limit = input<number>(15);
  groupBy = input<string>('nome_comune');
  sortDirection = signal<string>('desc');
  data = input<DataInterface[]>([]);
  dataSeries: Signal<ChartData<'bar'>> = computed(() => {
    const grouped = Object.groupBy(this.data(), (p: any) => p[this.groupBy()]);
    let groupKeys = Object.keys(grouped).sort((a, b) => {
      const comparison = grouped[a].reduce((acc, d) => acc += d.valore, 0) - grouped[b].reduce((acc, d) => acc += d.valore, 0);
      return this.sortDirection() === 'asc' ? comparison : -1 * comparison;
    }).slice(0, this.limit())
    let dataset: any = [];
    groupKeys.map(label => {
      dataset.push(grouped[label].reduce((acc, d) => acc += d.valore, 0));
    });
    return {labels: groupKeys, datasets: [{data: dataset}]};
  });


  annotationsSignal: Signal<any> = computed(() => {
    const annotations: any = {};
    this.dataSeries().labels.forEach((label, i) => {
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
      const value = this.dataSeries().datasets[0].data[i];
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


  public barChartOptions: Signal<ChartConfiguration<'bar'>['options']> = computed(() => {
    return {
      //set bars horizontally
      indexAxis: "x",
      // We use these empty structures as placeholders for dynamic theming.
      scales: {
        x: {
          display: true,

        },
        y: {
          display: false,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        // annotation: {
        //   clip: true, // <-- critical: clips annotations to the chart area
        //   annotations: this.annotationsSignal()
        // },
      }
    };
  });
  public barChartType = 'bar' as const;


  // events
  public chartClicked({event, active,}: { event?: ChartEvent; active?: object[]; }): void {
    // console.log(event, active);
  }

  public chartHovered({event, active,}: { event?: ChartEvent; active?: object[]; }): void {
    // console.log(event, active);
  }


  protected onSortChange($event: MatButtonToggleChange) {
    this.sortDirection.set($event.value);
  }

  protected onFilterChange($event: any) {
    console.log($event);
  }
}
