import {
  Component, computed,
  input,
  signal,
  Signal,

} from '@angular/core';
import CardComponent from '../card/card.component';
import {DataInterface, FilterOptionInterface} from '../../../interfaces';
import {DynamicFilterComponent} from '../dynamic-filter/dynamic-filter.component';
import {MatList, MatListItem} from '@angular/material/list';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'sheldon-list',
  imports: [CardComponent, DynamicFilterComponent, MatList, MatListItem, DecimalPipe],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss',
})
export default class ListaComponent {

  title = input<string>('Numero di progetti per comune');
  filterBy = input<string>('');
  filtersFields = computed<string[]>(() => this.filterBy().split('|'));
  private appliedFilters = signal<FilterOptionInterface[]>([]);

  masterField = input<string | null>(null);
  limit = input<number>(15);
  data = input<DataInterface[]>([]);


  filteredData: Signal<DataInterface[]> = computed(() => {
    const filters = this.appliedFilters();
    const filterSet = filters.length && filters.some(d => d.value);
    return filterSet
      ? this.data().filter(d =>
        filters.every(filter =>
          filter.value.length && filter.value === `${(d as any)[filter.key]}`
        )
      )
      : this.data();
  });


  protected onFilterChange($event: FilterOptionInterface[]) {
    this.appliedFilters.set($event.filter((f: FilterOptionInterface) => f.value));
  }

  udm = input<string | null>('€');
  totaleValore = computed<number>(() => {
    return this.filteredData()
      .map(d => d.valore)
      .reduce((a, b) => a + b, 0);
  });


}
