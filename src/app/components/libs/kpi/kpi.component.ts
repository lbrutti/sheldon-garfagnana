import {
  afterNextRender,
  Component, computed,
  DestroyRef,
  effect,
  ElementRef, inject, Injector,
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
import {TranslocoModule} from '@jsverse/transloco';

@Component({
  selector: 'sheldon-kpi',
  imports: [CardComponent, DynamicFilterComponent,  TranslocoModule],
  templateUrl: './kpi.component.html',
  styleUrl: './kpi.component.scss',
})
export default class KpiComponent {
  @ViewChild('counter') counterEl!: ElementRef<HTMLElement>;

  title = input<string>('');
  infoText = input<string>('');
  cardId = input<string>('');
  minFontSize = input<number>(15);
  categoria = input<string>('categoria');
  filterBy = input<string>('');
  filtersFields = computed<string[]>(() => this.filterBy().split('|'));
  externalFilters = input<Record<string, string>>({});
  private appliedFilters = signal<FilterOptionInterface[]>([]);

  masterField = input<string | null>(null);
  limit = input<number>(15);
  groupBy = input<keyof DataInterface>('comune');
  data = input<DataInterface[]>([]);
  reduceBy = input<string>('sum');

  filterByAlias = input<string | null>(null);
  filterFieldAliases: Signal<Record<string, string>> = computed(() => {
    const alias = this.filterByAlias();
    return alias ? {[this.filterBy() as string]: alias} : {};
  });

  private readonly mql = window.matchMedia('(max-width: 959px)');
  private readonly isMobile = signal(this.mql.matches);
  private readonly kpiTextLength = computed(() => {
    const formatted = this.formatter.format(this.aggregatedValue());
    const udm = this.udm() ?? '';
    return `${formatted} ${udm}`.trim().length;
  });
  protected readonly effectiveFontSize = computed(() => {
    const min = this.minFontSize();
    return this.isMobile() && min >= 80 && this.kpiTextLength() > 6 ? 48 : min;
  });

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

  private animFrom = 0;
  udm = input<string | null>(null);

  constructor(private injector: Injector) {
    const handler = (e: MediaQueryListEvent) => this.isMobile.set(e.matches);
    this.mql.addEventListener('change', handler);
    inject(DestroyRef).onDestroy(() => this.mql.removeEventListener('change', handler));

    effect(() => {
      const to = this.aggregatedValue();
      const from = untracked(() => this.animFrom);

      afterNextRender({
        read: () => {
          const el = this.counterEl?.nativeElement;
          if (!el) return;
          this.animateCounter(el, from, to, 500);
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

      el.textContent = `${this.formatter.format(current)} ${this.udm()??''}`;

      if (progress < 1) {
        this.rafId = requestAnimationFrame(tick);
      } else {
        this.rafId = null;
      }
    };

    this.rafId = requestAnimationFrame(tick);
  }
}
