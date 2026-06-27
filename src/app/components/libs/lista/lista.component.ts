import {
  Component, computed,
  input,
  InputSignal,
  signal,
  Signal,
} from '@angular/core';
import CardComponent from '../card/card.component';
import {DataInterface, FilterOptionInterface} from '../../../interfaces';
import {DynamicFilterComponent} from '../dynamic-filter/dynamic-filter.component';
import {MatButtonToggleChange} from '@angular/material/button-toggle';
import {MatList, MatListItem} from '@angular/material/list';
import {CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport} from '@angular/cdk/scrolling';
import {MultiplesPipe} from '../../../pipes';
import {SortToggle} from '../sort-toggle/sort-toggle';
import {getReducedValueByLabel} from '../../../utils';
import {TranslocoModule} from '@jsverse/transloco';

@Component({
  selector: 'sheldon-list',
  imports: [
    CardComponent,
    DynamicFilterComponent,
    SortToggle,
    MatList,
    MatListItem,
    CdkFixedSizeVirtualScroll,
    CdkVirtualScrollViewport,
    CdkVirtualForOf,
    MultiplesPipe,
    TranslocoModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss',
})
export default class ListaComponent {

  title = input<string>('');
  infoText = input<string>('');
  cardId = input<string>('');
  categoria = input<string>('sociale');
  filterBy = input<string>('');
  filtersFields = computed<string[]>(() => this.filterBy().split('|'));
  private appliedFilters = signal<FilterOptionInterface[]>([]);

  masterField = input<string | null>(null);
  limit = input<number>(15);
  data = input<DataInterface[]>([]);

  groupBy = input<string | null>(null);
  reduceBy = input<string | null>(null);
  filterByAlias = input<string | null>(null);
  filterFieldAliases: Signal<Record<string, string>> = computed(() => {
    const alias = this.filterByAlias();
    const key = this.filterBy();
    return alias && key ? {[key]: alias} : {};
  });

  showSorting = input<boolean>(false);
  sortBy: InputSignal<'category' | 'value'> = input<'category' | 'value'>('value');
  sortDirection = signal<string>('desc');
  defaultSortDirection = input<'asc' | 'desc'>('desc');

  filteredData: Signal<DataInterface[]> = computed(() => {
    const filters = this.appliedFilters();
    const filterSet = filters.length && filters.some(d => d.value);
    let result = filterSet
      ? this.data().filter(d =>
          filters.every(filter =>
            filter.value.length && filter.value === `${(d as any)[filter.key]}`
          )
        )
      : this.data();

    const groupBy = this.groupBy();
    const reduceBy = this.reduceBy();
    if (groupBy && reduceBy) {
      const grouped = Object.groupBy(result, (d: any) => d[groupBy]);
      result = Object.keys(grouped).map(key => ({
        ...grouped[key]![0],
        nome: key,
        valore: getReducedValueByLabel(grouped, key, reduceBy),
      }));
    }

    const dir = this.sortDirection();
    result = [...result].sort((a, b) =>
      this.sortBy() === 'category'
        ? `${a.nome}`.localeCompare(`${b.nome}`)
        : (+a.valore) - (+b.valore)
    );
    if (dir === 'desc') result.reverse();
    return result;
  });

  protected onFilterChange($event: FilterOptionInterface[]) {
    this.appliedFilters.set($event.filter((f: FilterOptionInterface) => f.value));
  }

  protected onSortChange($event: MatButtonToggleChange) {
    this.sortDirection.set($event.value);
  }

  udm = input<string | null>('€');
  totaleValore = computed<number>(() => {
    return this.filteredData()
      .map(d => d.valore)
      .reduce((a, b) => (+a + (+b)), 0);
  });


}
