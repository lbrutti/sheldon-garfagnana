import {Component, computed, input, signal, Signal, ViewChild, WritableSignal} from '@angular/core';
import {Chart, ChartConfiguration} from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(annotationPlugin);

import CardComponent from '../card/card.component';
import {MatButtonToggle, MatButtonToggleChange, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {MatIcon} from '@angular/material/icon';
import {DataInterface, FilterOptionInterface} from '../../../interfaces';
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
export default class ChartVerticalBarComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'bar'> | undefined;

  title = input<string>('Numero di progetti per comune');
  filterBy = input<string>('nome_comune');
  filtersFields = computed<string[]>((): string[] => {
    return this.filterBy().split('|');
  });
  protected appliedFilters = signal<FilterOptionInterface[]>([]);

  masterField = input<string | null>(null);
  limit = input<number>(15);
  groupBy = input<string>('nome_comune');
  sortDirection = signal<string>('desc');
  data = input<DataInterface[]>([]);
  reduceBy = input<string>('sum');

  chartData: Signal<ChartData<'bar'>> = computed(() => {
    const filterSet = this.appliedFilters().length && this.appliedFilters().some(d => d.value);
    const filteredData = filterSet ? this.data().filter(d => {
      const guard = filterSet ? (this.appliedFilters().every(filter => {
        return filter.value.length && (filter.value === `${(d as any)[filter.key]}`);
      })) : true;
      return guard;
    }) : this.data();
    const grouped = Object.groupBy(filteredData, (p: any) => p[this.groupBy()]);
    let groupKeys = Object.keys(grouped).sort((a, b) => {
      const comparison = this.getReducedValue(grouped, a) - this.getReducedValue(grouped, b);
      return this.sortDirection() === 'asc' ? comparison : -1 * comparison;
    }).slice(0, this.limit())
    let dataset: any = [];
    groupKeys.map(label => {
      const reducedValue = this.getReducedValue(grouped, label);
      dataset.push(reducedValue);
    });
    return {labels: groupKeys, datasets: [{data: dataset}]};
  });
  protected getReducedValue(grouped: Partial<Record<any, any[]>>, label: string) {
    switch (this.reduceBy()) {
      case 'sum':
        return grouped[label].reduce((acc: number, d: DataInterface) => (acc + d.valore), 0);
      case 'max':
        return grouped[label].reduce((acc: number, d: DataInterface) => Math.max(acc, d.valore), -Infinity);
      default:
        return 0;
    }
  }

  annotationsSignal: Signal<any> = computed(() => {
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


  public barChartOptions: Signal<ChartConfiguration<'bar'>['options']> = computed(() => {
    return {
      //set bars horizontally
      indexAxis: 'x',
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


  public chartClicked({event, active,}: { event?: ChartEvent; active?: object[]; }): void {
    // console.log(event, active);
  }

  public chartHovered({event, active,}: { event?: ChartEvent; active?: object[]; }): void {
    // console.log(event, active);
  }


  protected onSortChange($event: MatButtonToggleChange) {
    this.sortDirection.set($event.value);
  }

  protected onFilterChange($event: FilterOptionInterface[]) {
    this.appliedFilters.set($event.filter((f: FilterOptionInterface) => f.value));
  }


}
