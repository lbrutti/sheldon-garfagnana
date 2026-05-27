import {
  afterNextRender,
  Component, computed,
  effect,
  ElementRef, Injector,
  input,
  signal,
  Signal,
  untracked,
  ViewChild
} from '@angular/core';
import CardComponent from '../card/card.component';
import {DataInterface, FilterOptionInterface} from '../../../interfaces';
import {DynamicFilterComponent} from '../dynamic-filter/dynamic-filter.component';
import {getReducedValue} from '../../../utils';

@Component({
  selector: 'sheldon-map',
  imports: [CardComponent, DynamicFilterComponent],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export default class MapComponent {
  @ViewChild('counter') counterEl!: ElementRef<HTMLElement>;

  title = input<string>('Numero di progetti per comune');
  filterBy = input<string>('');
  filtersFields = computed<string[]>(() => this.filterBy().split('|'));
  private appliedFilters = signal<FilterOptionInterface[]>([]);

  masterField = input<string | null>(null);
  limit = input<number>(15);
  groupBy = input<keyof DataInterface>('comune');
  data = input<DataInterface[]>([]);
  reduceBy = input<string>('sum');

  private readonly formatter = new Intl.NumberFormat(navigator.language);
  private rafId: number | null = null;

  aggregatedValue: Signal<number> = computed(() => {
    const filters = this.appliedFilters();
    const filterSet = filters.length && filters.some(d => d.value);
    const filteredData = filterSet
      ? this.data().filter(d =>
        filters.every(filter =>
          filter.value.length && filter.value === `${(d as any)[filter.key]}`
        )
      )
      : this.data();
    return getReducedValue(filteredData, this.reduceBy());
  });


  protected onFilterChange($event: FilterOptionInterface[]) {
    this.appliedFilters.set($event.filter((f: FilterOptionInterface) => f.value));
  }

  udm = input<string | null>(null);

  constructor(private injector: Injector) {

  }

}
