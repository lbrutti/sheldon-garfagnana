import {
  Component,
  computed,
  ElementRef,
  input,
  InputSignal,
  OnDestroy,
  OnInit,
  signal,
  Signal,
  viewChild,
} from '@angular/core';
import CardComponent from '../card/card.component';
import {MatButtonToggleChange} from '@angular/material/button-toggle';
import {DataInterface, FilterOptionInterface} from '../../../interfaces';
import {DynamicFilterComponent} from '../dynamic-filter/dynamic-filter.component';
import {getRandomGradient, getReducedValueByLabel} from '../../../utils';
import {SortToggle} from '../sort-toggle/sort-toggle';
import ReduceByDeclaration from '../../../interfaces/reduce-by-declaration.interface';
import ChartLabelComponent from '../chart-label/chart-label.component';
import ReduceToggleComponent from '../reduce-toggle/reduce-toggle';
import {TranslocoModule} from '@jsverse/transloco';
import ChartTooltipComponent from '../chart-tooltip/chart-tooltip.component';
import {MultiplesPipe} from '../../../pipes';

export interface BarItem {
  label: string;
  value: number;
  pct: number;
  background: string;
  negative: boolean;
}

@Component({
  selector: 'sheldon-chart-bars',
  imports: [
    CardComponent,
    DynamicFilterComponent,
    SortToggle,
    ChartLabelComponent,
    ReduceToggleComponent,
    TranslocoModule,
    ChartTooltipComponent,
    MultiplesPipe,
  ],
  templateUrl: './chart-bar.component.html',
  styleUrl: './chart-bar.component.scss',
})
export default class ChartBarComponent implements OnInit, OnDestroy {

  title = input<string>('');
  infoText = input<string>('');
  cardId = input<string>('');
  udm = input<string>('');

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

  filterByAlias = input<string | null>(null);
  filterFieldAliases: Signal<Record<string, string>> = computed(() => {
    const alias = this.filterByAlias();
    return alias ? {[this.groupBy() as string]: alias} : {};
  });

  currentReduce = signal<ReduceByDeclaration | null>(null);

  // ── Hover / touch tooltip ─────────────────────────────────────────────────────
  protected readonly wrapperRef = viewChild<ElementRef<HTMLElement>>('wrapper');
  protected readonly tooltipRef = viewChild(ChartTooltipComponent, {read: ElementRef});

  protected hoveredBar = signal<BarItem | null>(null);
  protected pointer = signal<{ x: number; y: number }>({x: 0, y: 0});
  protected touchMode = signal<boolean>(false);

  private readonly scrollListener = () => {
    if (this.touchMode()) {
      this.hoveredBar.set(null);
      this.touchMode.set(false);
    }
  };

  constructor() {
    window.addEventListener('scroll', this.scrollListener, {passive: true, capture: true});
  }

  ngOnInit(): void {
    this.currentReduce.set({campo: this.groupBy(), reduceBy: this.reduceBy()});
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollListener, true);
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
    const minVal = Math.min(...values, 0);
    const maxVal = Math.max(...values, 0);
    const range = maxVal - minVal || 1;
    return keys.map((label, i): BarItem => ({
      label: label,
      value: values[i],
      pct: (Math.abs(values[i]) / range) * 100,
      background: this.gradients()[i],
      negative: values[i] < 0,
    }));
  });
  zeroLinePct: Signal<number> = computed(() => {
    const values = this.bars().map(b => b.value);
    if (!values.length) return 0;
    const minVal = Math.min(...values, 0);
    const maxVal = Math.max(...values, 0);
    const range = maxVal - minVal || 1;
    return (-minVal / range) * 100;
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

  protected onBarEnter(bar: BarItem, event: MouseEvent) {
    if (this.touchMode()) return;
    this.hoveredBar.set(bar);
    this.positionTooltip(event.clientX, event.clientY);
  }

  protected onBarMove(event: MouseEvent) {
    if (this.touchMode()) return;
    this.positionTooltip(event.clientX, event.clientY);
  }

  protected onBarLeave() {
    if (this.touchMode()) return;
    this.hoveredBar.set(null);
  }

  protected onBarTouch(bar: BarItem, event: TouchEvent) {
    event.preventDefault();
    const touch = event.changedTouches[0];
    this.touchMode.set(true);
    if (this.hoveredBar() === bar) {
      this.hoveredBar.set(null);
    } else {
      this.hoveredBar.set(bar);
      this.positionTooltip(touch.clientX, touch.clientY);
    }
  }

  protected onTooltipClick() {
    if (!this.touchMode()) return;
    this.hoveredBar.set(null);
    this.touchMode.set(false);
  }

  private positionTooltip(clientX: number, clientY: number) {
    this.updateTooltipPosition(clientX, clientY);
    requestAnimationFrame(() => this.updateTooltipPosition(clientX, clientY));
  }

  private updateTooltipPosition(clientX: number, clientY: number) {
    const wrapper = this.wrapperRef()?.nativeElement;
    if (!wrapper) {
      this.pointer.set({x: clientX, y: clientY});
      return;
    }
    const offset = 12;
    const bounds = wrapper.getBoundingClientRect();
    const tip = this.tooltipRef()?.nativeElement.querySelector('.chart-tooltip') as HTMLElement | null;
    const tipW = tip?.offsetWidth ?? 196;
    const tipH = tip?.offsetHeight ?? 64;

    let x = clientX + offset;
    if (x + tipW > bounds.right) x = clientX - offset - tipW;
    x = Math.min(Math.max(x, bounds.left), Math.max(bounds.right - tipW, bounds.left));

    let y = clientY + offset;
    if (y + tipH > bounds.bottom) y = clientY - offset - tipH;
    y = Math.min(Math.max(y, bounds.top), Math.max(bounds.bottom - tipH, bounds.top));

    this.pointer.set({x, y});
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
