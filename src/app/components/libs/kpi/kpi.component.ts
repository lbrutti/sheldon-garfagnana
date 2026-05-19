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

@Component({
  selector: 'sheldon-kpi',
  imports: [CardComponent, DynamicFilterComponent],
  templateUrl: './kpi.component.html',
  styleUrl: './kpi.component.scss',
})
export default class KpiComponent {
  @ViewChild('counter') counterEl!: ElementRef<HTMLElement>;

  title = input<string>('Numero di progetti per comune');
  filterBy = input<string>('nome_comune');
  filtersFields = computed<string[]>(() => this.filterBy().split('|'));
  private appliedFilters = signal<FilterOptionInterface[]>([]);

  masterField = input<string | null>(null);
  limit = input<number>(15);
  groupBy = input<string>('nome_comune');
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
    return filteredData
      .map(d => d.valore)
      .reduce((acc: number, val: number) => acc + val, 0);
  });

  protected onFilterChange($event: FilterOptionInterface[]) {
    this.appliedFilters.set($event.filter((f: FilterOptionInterface) => f.value));
  }

  private animFrom = 0;

  constructor(private injector: Injector) {
    effect(() => {
      const to = this.aggregatedValue();
      const from = untracked(() => this.animFrom);

      afterNextRender({
        read: () => {
          const el = this.counterEl?.nativeElement;
          if (!el) return;
          this.animateCounter(el, from, to);
          this.animFrom = to;
        }
      }, {injector: this.injector});
    });
  }

  private animateCounter(el: HTMLElement, from: number, to: number, duration = 1000) {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
    }

    const start = performance.now();
    const delta = to - from;
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3); // cubic ease-out

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.round(from + delta * easeOut(progress));

      el.textContent = this.formatter.format(current);

      if (progress < 1) {
        this.rafId = requestAnimationFrame(tick);
      } else {
        this.rafId = null;
      }
    };

    this.rafId = requestAnimationFrame(tick);
  }
}
