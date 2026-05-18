import {
  afterNextRender,
  Component,
  computed,
  effect, ElementRef,
  Injector,
  input,
  signal,
  Signal,
  untracked,
  ViewChild
} from '@angular/core';


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
    const filters = this.appliedFilters();
    const filterSet = filters.length && filters.some(d => d.value);
    const filteredData = filterSet ? this.data().filter(d => {
      const guard = filterSet ? (filters.every(filter => {
        return filter.value.length && (filter.value === (d as any)[filter.key]);
      })) : true;
      return guard;
    }) : this.data();
    return filteredData.map(d => d.valore).reduce((acc: number, val: number) => acc + val, 0);

  });


  protected onFilterChange($event: FilterOptionInterface[]) {
    this.appliedFilters.set($event.filter((f: FilterOptionInterface) => f.value));
  }


  // Track the "from" value for animation
  protected animFrom = signal(0);
  protected animTo = signal(0);
  protected animKey = signal(0); // bump to re-trigger animation

  @ViewChild('counter') counterEl!: ElementRef<HTMLElement>;

  constructor(private injector: Injector) {
    effect(() => {
      const value = this.aggregatedValue();
      const prev = untracked(() => this.animTo());

      untracked(() => {
        this.animFrom.set(prev);
        this.animTo.set(value);
      });

      afterNextRender({
        read: () => {
          const el = this.counterEl?.nativeElement;
          if (!el) return;
          el.classList.remove('animate');
          void el.offsetWidth; // reflow break
          el.classList.add('animate');
        }
      }, {injector: this.injector});
    });
  }

}
