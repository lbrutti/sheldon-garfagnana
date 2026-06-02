import {
  Component,
  signal,
  computed,
  ChangeDetectionStrategy, input, InputSignal, OnInit, Signal, Input,
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {components, DynamicFilterComponent} from '../index';
import {MatButtonToggleChange} from '@angular/material/button-toggle';
import ReduceToggleComponent from '../reduce-toggle/reduce-toggle';
import CardComponent from '../card/card.component';
import {DataInterface, FilterOptionInterface} from '../../../interfaces';
import {ChartData} from 'chart.js';
import {getRandomGradient, getReducedValue, getReducedValueByLabel} from '../../../utils';
import {SortToggle} from '../sort-toggle/sort-toggle';
import ChartTwoLinesLabelComponent from '../chart-two-lines-label/chart-two-lines-label.component';

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
    SortToggle,
    ReduceToggleComponent,
    ChartTwoLinesLabelComponent
  ],
  templateUrl: './chart-segmented-bar.component.html',
  styleUrls: ['./chart-segmented-bar.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ChartSegmentedBarComponent implements OnInit {
  readonly title = input<string>('Popolazione');

  readonly hoveredIndex = signal<number | null>(null);
  labelField = input<string>('nome');
  data = input<DataInterface[]>([]);
  currentReduce = signal<{ campo: string, reduceBy: string } | null>(null);
  reduceBy = input<string>('sum');
  auxReduce = input<{ campo: keyof DataInterface, reduceBy: string }[]>([]);
  groupBy = input<string | keyof DataInterface>('comune');
  limit = input<number>(15);
  categoria = input<string>('');

  showSorting = input<boolean>(false);
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
    const reducedTotal = getReducedValue(filteredData, this.currentReduce().reduceBy, this.currentReduce().campo);
    groupKeys.map(dataKey => {
      const reducedValue = getReducedValueByLabel(grouped, dataKey, this.currentReduce().reduceBy);
      const color = getRandomGradient(this.categoria(), '90deg');
      segments.push({
        label: dataKey,
        shortLabel: dataKey,
        percentage: reducedValue / reducedTotal * 100,
        count: reducedValue,
        color: color,
        hoverColor: 'gold',
        textColor: 'black',
      });
    });

    return segments;
  });

  ngOnInit(): void {
    this.currentReduce.set({campo: this.groupBy(), reduceBy: this.reduceBy()})
    this.sortDirection.set(this.defaultSortDirection());
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

  protected onSortChange($event: MatButtonToggleChange) {
    this.sortDirection.set($event.value);
  }

  protected onReduceChange($event: MatButtonToggleChange) {
    this.currentReduce.set($event.value);
  }

}
