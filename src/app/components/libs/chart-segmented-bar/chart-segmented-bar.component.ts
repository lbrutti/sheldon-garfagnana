import {
  Component,
  computed,
  signal,
  ElementRef,
  inject,
  input,
  InputSignal,
  OnDestroy,
  OnInit,
  Signal,
  viewChild,
} from '@angular/core';
import {TranslocoService} from '@jsverse/transloco';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {DynamicFilterComponent} from '../index';
import {MatButtonToggleChange} from '@angular/material/button-toggle';
import ReduceToggleComponent from '../reduce-toggle/reduce-toggle';
import CardComponent from '../card/card.component';
import {DataInterface, FilterOptionInterface} from '../../../interfaces';
import {getRandomGradient, getReducedValue, getReducedValueByLabel} from '../../../utils';
import {SortToggle} from '../sort-toggle/sort-toggle';
import ChartTwoLinesLabelComponent from '../chart-two-lines-label/chart-two-lines-label.component';
import {MultiplesPipe} from '../../../pipes';
import {TranslocoModule} from '@jsverse/transloco';
import ChartTooltipComponent from '../chart-tooltip/chart-tooltip.component';

export interface SegmentInterface {
  label: string;
  shortLabel: string;
  percentage: number;
  count: number;
  color: string;
  hoverColor: string;
  textColor: string;
}

@Component({
  selector: 'sheldon-segmented-chart',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    CardComponent,
    DynamicFilterComponent,
    SortToggle,
    ReduceToggleComponent,
    ChartTwoLinesLabelComponent,
    TranslocoModule,
    ChartTooltipComponent,
  ],
  providers: [MultiplesPipe],
  templateUrl: './chart-segmented-bar.component.html',
  styleUrls: ['./chart-segmented-bar.component.scss'],
})
export default class ChartSegmentedBarComponent implements OnInit, OnDestroy {
  private readonly transloco = inject(TranslocoService);

  readonly title = input<string>('');
  readonly infoText = input<string>('');
  readonly cardId = input<string>('');

  labelField = input<string>('nome');
  data = input<DataInterface[]>([]);
  currentReduce = signal<{ campo: string, reduceBy: string } | null>(null);
  reduceBy = input<string>('sum');
  auxReduce = input<{ campo: keyof DataInterface, reduceBy: string }[]>([]);
  groupBy = input<string | keyof DataInterface>('comune');
  limit = input<number>(15);
  categoria = input<string>('');

  expandOnHover = input<boolean>(false);

  showSorting = input<boolean>(false);
  sortBy: InputSignal<'category' | 'value'> = input<'category' | 'value'>('value');
  sortDirection = signal<string>('desc');
  defaultSortDirection = input<'asc' | 'desc'>('desc');

  masterField = input<string | null>(null);
  filterBy = input<string | null>(null);
  filtersFields = computed<string[]>((): string[] => {
    return this.filterBy() !== null ? this.filterBy().split('|') : [];
  });
  protected appliedFilters = signal<FilterOptionInterface[]>([]);

  filterByAlias = input<string | null>(null);
  translationKey = input<string | null>(null);
  filterFieldAliases: Signal<Record<string, string>> = computed(() => {
    const alias = this.filterByAlias();
    return alias ? {[this.groupBy() as string]: alias} : {};
  });

  // ── Hover state ───────────────────────────────────────────────────────────────
  protected hoveredSegment = signal<SegmentInterface | null>(null);

  // ── Hover / touch tooltip ─────────────────────────────────────────────────────
  private readonly wrapperRef = viewChild<ElementRef<HTMLElement>>('wrapper');
  private readonly tooltipRef = viewChild(ChartTooltipComponent, {read: ElementRef});

  protected pointer = signal<{ x: number; y: number }>({x: 0, y: 0});
  protected touchMode = signal<boolean>(false);

  private readonly scrollListener = () => {
    if (this.touchMode()) {
      this.hoveredSegment.set(null);
      this.touchMode.set(false);
    }
  };

  segments: Signal<SegmentInterface[]> = computed((): any[] => {
    const filterSet = this.appliedFilters().length && this.appliedFilters().some(d => d.value);
    const filteredData = filterSet ? this.data().filter(d => {
      const guard = filterSet ? (this.appliedFilters().every(filter => {
        return filter.value.length && (filter.value === `${(d as any)[filter.key]}`);
      })) : true;
      return guard;
    }) : this.data();

    const grouped = Object.groupBy(filteredData, (p: any) => p[this.groupBy()]);

    let groupKeys = this.getGroupedKeys(grouped);
    const segments: SegmentInterface[] = [];
    const reducedTotal = getReducedValue(filteredData, this.currentReduce().reduceBy, this.currentReduce().campo);
    const useTranslation = !!this.translationKey();
    groupKeys.map(dataKey => {
      const reducedValue = getReducedValueByLabel(grouped, dataKey, this.currentReduce().reduceBy);
      const color = getRandomGradient(this.categoria(), '90deg');
      const displayLabel = useTranslation ? this.transloco.translate(dataKey) : dataKey;
      segments.push({
        label: displayLabel,
        shortLabel: displayLabel,
        percentage: reducedValue / reducedTotal * 100,
        count: reducedValue,
        color: color,
        hoverColor: 'gold',
        textColor: 'black',
      });
    });

    return segments;
  });

  constructor(private readonly multiples: MultiplesPipe) {
    window.addEventListener('scroll', this.scrollListener, {passive: true, capture: true});
  }

  ngOnInit(): void {
    this.currentReduce.set({campo: this.groupBy(), reduceBy: this.reduceBy()});
    this.sortDirection.set(this.defaultSortDirection());
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollListener, true);
  }

  getGroupedKeys(grouped: any): string[] {
    const groupKeys = this.sortBy() === 'category'
      ? Object.keys(grouped).sort((a, b) => `${a}`.localeCompare(`${b}`))
      : Object.keys(grouped).sort((a, b) => {
        return getReducedValueByLabel(grouped, a, this.currentReduce().reduceBy) -
          getReducedValueByLabel(grouped, b, this.currentReduce().reduceBy);
      });
    if ((!this.showSorting() && (this.defaultSortDirection() === 'desc')) ||
      (this.showSorting() && this.sortDirection() === 'desc')) {
      groupKeys.reverse();
    }
    return this.limit() ? groupKeys.slice(0, this.limit()) : groupKeys;
  }

  protected onSegmentEnter(seg: SegmentInterface, event: MouseEvent): void {
    if (this.touchMode()) return;
    this.hoveredSegment.set(seg);
    this.positionTooltip(event.clientX, event.clientY);
  }

  protected onSegmentMove(event: MouseEvent): void {
    if (this.touchMode()) return;
    this.positionTooltip(event.clientX, event.clientY);
  }

  protected onSegmentLeave(): void {
    if (this.touchMode()) return;
    this.hoveredSegment.set(null);
  }

  protected onSegmentTouch(seg: SegmentInterface, event: TouchEvent): void {
    event.preventDefault();
    const touch = event.changedTouches[0];
    this.touchMode.set(true);
    if (this.hoveredSegment() === seg) {
      this.hoveredSegment.set(null);
    } else {
      this.hoveredSegment.set(seg);
      this.positionTooltip(touch.clientX, touch.clientY);
    }
  }

  protected onTooltipClick(): void {
    if (!this.touchMode()) return;
    this.hoveredSegment.set(null);
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

  formatCount(count: number): string {
    return `(${count.toLocaleString('it-IT')})`;
  }

  formatPercentage(seg: SegmentInterface): string {
    if (this.currentReduce().reduceBy === 'sum') {
      return this.multiples.transform(seg.count);
    } else {
      return seg.percentage.toFixed(1).replace('.', ',') + '%';
    }
  }

  protected onFilterChange($event: FilterOptionInterface[]) {
    this.appliedFilters.set($event.filter((f: FilterOptionInterface) => f.value));
  }

  protected onSortChange($event: MatButtonToggleChange) {
    this.sortDirection.set($event.value);
  }

  protected onReduceChange($event: MatButtonToggleChange) {
    this.currentReduce.set($event.value);
  }
}
