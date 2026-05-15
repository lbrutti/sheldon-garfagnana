import {Component, computed, input, signal, Signal, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(annotationPlugin);

import CardComponent from '../card/card.component';
import {MatButtonToggle, MatButtonToggleChange, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {MatIcon} from '@angular/material/icon';
import {ProjectInterface} from '../../../interfaces';
import {BaseChartDirective} from 'ng2-charts';
import {ChartData, ChartEvent} from 'chart.js';

@Component({
  selector: 'sheldon-chart-h-bars',
  imports: [
    CardComponent,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatIcon,
    BaseChartDirective,
  ],
  templateUrl: './chart-horizontal-bar.component.html',
  styleUrl: './chart-horizontal-bar.component.scss',
})
export default class ChartHorizontalBarComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'bar'> | undefined;

  groupBy = input<string>('municipality');
  projects = input<ProjectInterface[]>([]);
  title = input<string>('Numero di progetti per comune');
  sortDirection = signal<string>('desc');
  projectSeries: Signal<ChartData<'bar'>> = computed(() => {
    const grouped = Object.groupBy(this.projects(), (p: any) => p[this.groupBy()]);
    const groupKeys = Object.keys(grouped);
    groupKeys.sort((a, b) => {
      const comparison = grouped[a].length - grouped[b].length;
      return this.sortDirection() === 'asc' ? comparison : -1 * comparison;
    })
    let dataset: any = [];
    groupKeys.map(label => {
      dataset.push(grouped[label].length);
    });
    return {labels: groupKeys, datasets: [{data: dataset}]};
  });

  annotationsSignal: Signal<any> = computed(() => {
    const annotations: any = {};
    this.projectSeries().labels.forEach((label, i) => {
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
const value =this.projectSeries().datasets[0].data[i];
      annotations[`count_${i}`] = {
        type: 'label',
        yValue: label,
        xValue: (ctx:any)=>ctx.chart.scales.x.max,
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


  public barChartOptions = computed(() => {
    return {
      //set bars horizontally
      indexAxis: ("y" as "x" | "y"),
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
  public barChartType = 'bar' as const;


  // events
  public chartClicked({event, active,}: { event?: ChartEvent; active?: object[]; }): void {
    console.log(event, active);
  }

  public chartHovered({event, active,}: { event?: ChartEvent; active?: object[]; }): void {
    console.log(event, active);
  }


  protected onSortChange($event: MatButtonToggleChange) {
    this.sortDirection.set($event.value);
  }
}
