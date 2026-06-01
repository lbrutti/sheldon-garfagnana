import {
  Component,
  computed, Input,
  input,
  InputSignal,
  OnInit,
  signal,
  Signal,
} from '@angular/core';
import CardComponent from '../card/card.component';
import {MatButtonToggle, MatButtonToggleChange, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {DataInterface, FilterOptionInterface} from '../../../interfaces';
import {DynamicFilterComponent} from '../dynamic-filter/dynamic-filter.component';
import {getRandomGradient, getReducedValueByLabel} from '../../../utils';
import {SortToggle} from '../sort-toggle/sort-toggle';
import ReduceByDeclaration from '../../../interfaces/reduce-by-declaration.interface';

export interface BarItem {
  label: string;
  value: number;
  pct: number;
  background: string
}

@Component({
  selector: 'sheldon-chart-bars',
  imports: [
    CardComponent,
    MatButtonToggleGroup,
    MatButtonToggle,
    DynamicFilterComponent,
    SortToggle,
  ],
  templateUrl: './chart-bar.component.html',
  styleUrl: './chart-bar.component.scss',
})
export default class ChartBarComponent implements OnInit {

  title = input<string>('Numero di progetti per comune');

  showSorting = input<boolean>(true);
  sortBy: InputSignal<'category' | 'value'> = input<'category' | 'value'>('value');
  sortDirection = signal<string>('desc');
  defaultSortDirection = input<'asc' | 'desc'>('desc');

  masterField = input<string | null>(null);
  filterBy = input<string | null>(null);
  filtersFields = computed<string[]>((): string[] => {
    return this.filterBy() !== null ? this.filterBy()!.split('|') : [];
  });
  protected appliedFilters = signal<FilterOptionInterface[]>([]);

  limit = input<number>(15);
  groupBy = input<keyof DataInterface>('comune');

  data = input<DataInterface[]>([]);
  reduceBy = input<string>('sum');
  auxReduce = input<ReduceByDeclaration[]>([]);

  currentReduce = signal<{ campo: string; reduceBy: string } | null>(null);

  ngOnInit(): void {
    this.currentReduce.set({campo: this.groupBy(), reduceBy: this.reduceBy()});
  }

  gradients: Signal<string[]> = computed(() => this.data().map(d => getRandomGradient(this.categoria(), '0deg')));
  bars: Signal<BarItem[]> = computed(() => {
    const reduce = this.currentReduce();
    if (!reduce) return [];

    const filterSet = this.appliedFilters().length && this.appliedFilters().some(d => d.value);
    const filteredData = filterSet
      ? this.data().filter(d =>
        this.appliedFilters().every(
          filter => filter.value.length && filter.value === `${(d as any)[filter.key]}`
        )
      )
      : this.data();

    const grouped = Object.groupBy(filteredData, (p: any) => p[this.groupBy()]);
    const keys = this.getGroupedKeys(grouped);
    const values = keys.map(label => getReducedValueByLabel(grouped, label, reduce.reduceBy));
    const max = Math.max(...values, 1);
    return keys.map((label, i): BarItem => ({
      label,
      value: values[i],
      pct: (values[i] / max) * 100,
      background: this.gradients()[i]
    }));
  });
  categoria = input<string>('');

  getGroupedKeys(grouped: any): string[] {
    const reduce = this.currentReduce();
    const groupKeys =
      this.sortBy() === 'category'
        ? Object.keys(grouped).sort((a, b) => `${a}`.localeCompare(`${b}`))
        : Object.keys(grouped).sort(
          (a, b) =>
            getReducedValueByLabel(grouped, a, reduce?.reduceBy ?? 'sum') -
            getReducedValueByLabel(grouped, b, reduce?.reduceBy ?? 'sum')
        );
    if (
      (!this.showSorting() && this.defaultSortDirection() === 'desc') ||
      (this.showSorting() && this.sortDirection() === 'desc')
    ) {
      groupKeys.reverse();
    }
    return this.limit() ? groupKeys.slice(0, this.limit()) : groupKeys;
  }

  protected onSortChange($event: MatButtonToggleChange) {
    this.sortDirection.set($event.value);
  }

  protected onFilterChange($event: FilterOptionInterface[]) {
    this.appliedFilters.set($event.filter((f: FilterOptionInterface) => f.value));
  }

  protected onReduceChange($event: MatButtonToggleChange) {
    this.currentReduce.set($event.value);
  }


}
