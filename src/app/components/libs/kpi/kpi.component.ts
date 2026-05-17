import {Component, computed, input, signal, Signal, ViewChild} from '@angular/core';


import CardComponent from '../card/card.component';
import {DataInterface, FilterOptionInterface} from '../../../interfaces';
import {BaseChartDirective} from 'ng2-charts';

import {DynamicFilterComponent} from '../dynamic-filter/dynamic-filter.component';

@Component({
  selector: 'sheldon-kpi',
  imports: [
    CardComponent,
    DynamicFilterComponent
  ],
  templateUrl: './kpi.component.html',
  styleUrl: './kpi.component.scss',
})
export default class KpiComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'bar'> | undefined;

  title = input<string>('Numero di progetti per comune');
  filterBy = input<string>('nome_comune');
  filtersFields = computed<string[]>((): string[] => {
    return this.filterBy().split('|');
  });
  private appliedFilters = signal<FilterOptionInterface[]>([]);

  masterField = input<string | null>(null);
  limit = input<number>(15);
  groupBy = input<string>('nome_comune');
  data = input<DataInterface[]>([]);
  reduceBy = input<string>('sum');

  aggregatedValue: Signal<number> = computed(() => {
    const filterSet = this.appliedFilters().length && this.appliedFilters().some(d => d.value);
    const filteredData = filterSet ? this.data().filter(d => {
      const guard = filterSet ? (this.appliedFilters().every(filter => {
        return filter.value.length && (filter.value === (d as any)[filter.key]);
      })) : true;
      return guard;
    }) : this.data();
    return filteredData.map(d => d.valore).reduce((acc: number, val: number) => acc + val);

  });


  protected onFilterChange($event: FilterOptionInterface[]) {
    this.appliedFilters.set($event.filter((f: FilterOptionInterface) => f.value));
  }


}
