import {Component, computed, input, signal, Signal, ViewChild} from '@angular/core';

import CardComponent from '../card/card.component';
import {MatButtonToggle, MatButtonToggleChange, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {MatIcon} from '@angular/material/icon';
import {ProjectInterface} from '../../../interfaces';
import {BaseChartDirective} from 'ng2-charts';
import {ChartConfiguration, ChartData, ChartEvent} from 'chart.js';

@Component({
  selector: 'sheldon-projects-by-key-card',
  imports: [
    CardComponent,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatIcon,
    BaseChartDirective,
  ],
  templateUrl: './projects-by-key-card.component.html',
  styleUrl: './projects-by-key-card.component.scss',
})
export default class ProjectsByKeyCardComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'bar'> | undefined;

  groupBy = input<string>('municipality');
  projects = input<ProjectInterface[]>([]);
  title = input<string>('Numero di progetti per comune');

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

  sortDirection = signal<string>('desc');
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    //set bars horizontally
    indexAxis: 'y',
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {},
    },
    plugins: {
      legend: {
        display: false,
      },

    },
  };
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
