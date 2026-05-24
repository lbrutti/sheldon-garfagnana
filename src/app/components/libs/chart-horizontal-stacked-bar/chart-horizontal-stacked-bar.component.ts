import {
  Component,
  signal,
  computed,
  ChangeDetectionStrategy, input, InputSignal, OnInit, Signal,
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {components, DynamicFilterComponent} from '../index';
import {MatButtonToggleGroup} from '@angular/material/button-toggle';
import CardComponent from '../card/card.component';
import {DataInterface, FilterOptionInterface} from '../../../interfaces';
import {ChartData} from 'chart.js';
import {getReducedValueByLabel} from '../../../utils';

export interface SegmentInterface {
  label: string;
  shortLabel: string;
  percentage: number;
  count: number;
  color: string;
  hoverColor: string;
  textColor: string;
}

@Component({
  selector: 'sheldon-segmented-chart',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    CardComponent,
    DynamicFilterComponent,

  ],
  templateUrl: './chart-horizontal-stacked-bar.component.html',
  styleUrls: ['./chart-horizontal-stacked-bar.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ChartHorizontalStackedBarComponent implements OnInit {
  readonly title = input<string>('Popolazione');
  readonly country = signal('ITALIA');
  readonly year = signal('2019');
  readonly highlightedPercentage = signal('5,2%');
  readonly total = signal(60_119);
  readonly hoveredIndex = signal<number | null>(null);

  data = input<DataInterface[]>([]);
  currentReduce = signal<{ campo: string, reduceBy: string } | null>(null);
  reduceBy = input<string>('sum');
  auxReduce = input<{ campo: keyof DataInterface, reduceBy: string }[]>([]);
  groupBy = input<string | keyof DataInterface>('comune');
  limit = input<number>(15);

  showSorting = input<boolean>(true);
  sortBy: InputSignal<'category' | 'value'> = input<'category' | 'value'>('value');
  sortDirection = signal<string>('desc');
  defaultSortDirection = input<'asc' | 'desc'>('desc');

  masterField = input<string | null>(null);
  filterBy = input<string | null>(null);
  filtersFields = computed<string[]>((): string[] => {
    return this.filterBy() !== null ? this.filterBy().split('|') : [];
  });
  protected appliedFilters = signal<FilterOptionInterface[]>([]);

  segments: Signal<SegmentInterface[]> = computed((): any[] => {
    const filterSet = this.appliedFilters().length && this.appliedFilters().some(d => d.value);
    const filteredData = filterSet ? this.data().filter(d => {
      const guard = filterSet ? (this.appliedFilters().every(filter => {
        return filter.value.length && (filter.value === `${(d as any)[filter.key]}`);
      })) : true;
      return guard;
    }) : this.data();

    const grouped = Object.groupBy(filteredData, (p: any) => p[this.groupBy()]);
    let groupKeys = this.getGroupedKeys(grouped);
    const segments: SegmentInterface[] = [];
    groupKeys.map(label => {
      const reducedValue = getReducedValueByLabel(grouped, label, this.currentReduce().reduceBy);
      segments.push({
        label: label,
        shortLabel: label,
        percentage: grouped[label].length/filteredData.length *100,
        count: reducedValue,
        color: 'red',
        hoverColor: 'gold',
        textColor: 'black',
      });
    });

    return segments;
  });

  ngOnInit(): void {
    this.currentReduce.set({campo: this.groupBy(), reduceBy: this.reduceBy()})
  }

  getGroupedKeys(grouped: any): string[] {
    const groupKeys = this.sortBy() === 'category' ? Object.keys(grouped).sort((a, b) => `${a}`.localeCompare(`${b}`)) : Object.keys(grouped).sort((a, b) => {
      return getReducedValueByLabel(grouped, a, this.currentReduce().reduceBy) - getReducedValueByLabel(grouped, b, this.currentReduce().reduceBy);
    });
    if ((!this.showSorting() && (this.defaultSortDirection() === 'desc')) || (this.showSorting() && this.sortDirection() === 'desc')) {
      groupKeys.reverse();
    }
    return this.limit() ? groupKeys.slice(0, this.limit()) : groupKeys;
  }

  readonly formattedTotal = computed(() =>
    this.total().toLocaleString('it-IT')
  );

  onSegmentHover(index: number): void {
    this.hoveredIndex.set(index);
  }

  onSegmentLeave(): void {
    this.hoveredIndex.set(null);
  }

  formatCount(count: number): string {
    return `(${count.toLocaleString('it-IT')})`;
  }

  formatPercentage(value: number): string {
    return value.toFixed(1).replace('.', ',') + '%';
  }

  protected onFilterChange($event: FilterOptionInterface[]) {
    this.appliedFilters.set($event.filter((f: FilterOptionInterface) => f.value));
  }

}
