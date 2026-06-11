import {
  afterNextRender,
  Component, computed,
  effect,
  ElementRef, Injector,
  input,
  OnDestroy,
  signal,
  Signal,
  untracked,
  ViewChild
} from '@angular/core';
import CardComponent from '../card/card.component';
import {DataInterface, FilterOptionInterface} from '../../../interfaces';
import {DynamicFilterComponent} from '../dynamic-filter/dynamic-filter.component';
import {getReducedValue} from '../../../utils';
import {FitTextDirective} from '../../../directives/fit-text.directive';
import {TranslocoModule} from '@jsverse/transloco';

@Component({
  selector: 'sheldon-kpi',
  imports: [CardComponent, DynamicFilterComponent, FitTextDirective, TranslocoModule],
  templateUrl: './kpi.component.html',
  styleUrl: './kpi.component.scss',
})
export default class KpiComponent implements OnDestroy {
  @ViewChild('counter') counterEl!: ElementRef<HTMLElement>;

  title = input<string>('');
  infoText = input<string>('');
  cardId = input<string>('');
  minFontSize = input<number>(15);
  categoria = input<string>('categoria');
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
  private firstAnimation = true;
  private readonly creationTime = performance.now();
  private fadeInTimeout: ReturnType<typeof setTimeout> | null = null;

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

  constructor(private injector: Injector, private elementRef: ElementRef) {
    effect(() => {
      const to = this.aggregatedValue();
      const from = untracked(() => this.animFrom);

      afterNextRender({
        read: () => {
          const el = this.counterEl?.nativeElement;
          if (!el) return;

          if (this.fadeInTimeout !== null) {
            clearTimeout(this.fadeInTimeout);
            this.fadeInTimeout = null;
          }

          const delay = this.firstAnimation ? this.computeCounterDelay() : 0;
          this.firstAnimation = false;
          this.animFrom = to;

          if (delay > 0) {
            this.fadeInTimeout = setTimeout(() => {
              this.fadeInTimeout = null;
              this.animateCounter(el, from, to, 500);
            }, delay);
          } else {
            this.animateCounter(el, from, to, 500);
          }
        }
      }, {injector: this.injector});
    });
  }

  ngOnDestroy(): void {
    if (this.fadeInTimeout !== null) clearTimeout(this.fadeInTimeout);
    if (this.rafId !== null) cancelAnimationFrame(this.rafId);
  }

  private computeCounterDelay(): number {
    const raw = getComputedStyle(this.elementRef.nativeElement).getPropertyValue('--tile-delay').trim();
    const tileDelayMs = parseFloat(raw) * 1000 || 0;
    const elapsed = performance.now() - this.creationTime;
    return Math.max(0, tileDelayMs + 400 - elapsed);
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
