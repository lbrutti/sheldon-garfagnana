import {
  Component,
  computed,
  ElementRef,
  inject,
  Input,
  input,
  OnDestroy,
  OnInit,
  signal,
  Signal,
  viewChild,
} from '@angular/core';
import {TranslocoService} from '@jsverse/transloco';
import {MatButtonToggleChange} from '@angular/material/button-toggle';
import ReduceToggleComponent from '../reduce-toggle/reduce-toggle';
import {DynamicFilterComponent} from '../dynamic-filter/dynamic-filter.component';
import {FilterOptionInterface, TreemapDataInterface} from '../../../interfaces';
import {getRandomGradient, getReducedValue} from '../../../utils';
import CardComponent from '../card/card.component';
import ReduceByDeclaration from '../../../interfaces/reduce-by-declaration.interface';
import {MultiplesPipe} from '../../../pipes';
import {DecimalPipe} from '@angular/common';
import {components} from '../index';
import ChartTwoLinesLabelComponent from '../chart-two-lines-label/chart-two-lines-label.component';
import ChartTooltipComponent from '../chart-tooltip/chart-tooltip.component';
import {TranslocoModule} from '@jsverse/transloco';

type ReduceMode = 'sum' | 'count' | 'max';

export interface TreemapTile {
  label: string;
  value: number;
  formattedValue: string;
  x: number; // percentage
  y: number;
  w: number;
  h: number;
  color: string;
}


@Component({
  selector: 'sheldon-chart-treemap',
  imports: [
    CardComponent,
    DynamicFilterComponent,
    ReduceToggleComponent,
    ChartTwoLinesLabelComponent,
    ChartTooltipComponent,
    TranslocoModule
  ],
  providers: [DecimalPipe, MultiplesPipe],
  templateUrl: './chart-treemap.component.html',
  styleUrl: './chart-treemap.component.scss',
})
export default class ChartTreemapComponent implements OnInit, OnDestroy {

  private readonly transloco = inject(TranslocoService);

  title = input<string>('');
  infoText = input<string>('');
  cardId = input<string>('');
  data = input<TreemapDataInterface[]>([]);
  groups = input<(keyof TreemapDataInterface & string)[]>(['comune']);

  campo = input<string>('valore');
  reduceBy = input<ReduceMode>('sum');
  auxReduce = input<ReduceByDeclaration[]>([]);

  translationKey = input<string | null>(null);
  filterBy = input<string | null>(null);
  filtersFields = computed<string[]>((): string[] =>
    this.filterBy() !== null ? this.filterBy()!.split('|') : []
  );
  filterByAlias = input<string | null>(null);
  filterFieldAliases: Signal<Record<string, string>> = computed(() => {
    const alias = this.filterByAlias();
    const key = this.filterBy();
    return alias && key ? {[key]: alias} : {};
  });
  masterField = input<string | null>(null);
  protected appliedFilters = signal<FilterOptionInterface[]>([]);

  currentReduce = signal<ReduceByDeclaration | null>(null);

  gradients: Signal<string[]> = computed(() => {
    return this.data().map(d => getRandomGradient(this.categoria(), '0deg'));
  });

  private readonly scrollListener = () => {
    if (this.touchMode()) {
      this.hoveredTile.set(null);
      this.touchMode.set(false);
    }
  };

  constructor(private readonly multiples: MultiplesPipe) {
    window.addEventListener('scroll', this.scrollListener, {passive: true, capture: true});
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollListener, true);
  }

  ngOnInit(): void {
    this.currentReduce.set({
      campo: this.auxReduce()[0].campo ?? this.campo(),
      reduceBy: this.auxReduce()[0].reduceBy ?? this.reduceBy()
    });
  }

  protected filteredData = computed<TreemapDataInterface[]>(() => {
    const filterSet = this.appliedFilters().length && this.appliedFilters().some(d => d.value);
    if (!filterSet) return this.data();
    return this.data().filter(d =>
      this.appliedFilters().every(f => f.value.length && f.value === `${d[f.key]}`)
    );
  });

  protected aggregatedTree = computed<{ label: string; value: number; groupKey: string }[]>(() => {
    const raw = this.filteredData();
    const groupFields = this.groups();
    const {campo, reduceBy} = this.currentReduce()!;
    const outerField = groupFields[0];
    const innerField = groupFields[groupFields.length - 1];

    const useTranslation = !!this.translationKey();
    const buckets = new Map<string, { groupKey: string; label: string; rows: TreemapDataInterface[] }>();
    for (const row of raw) {
      const key = groupFields.map(f => `${row[f] ?? '—'}`).join('||');
      if (!buckets.has(key)) {
        const rawLabel = `${row[innerField] ?? '—'}`;
        buckets.set(key, {
          groupKey: `${row[outerField] ?? '—'}`,
          label: useTranslation ? this.transloco.translate(rawLabel) : rawLabel,
          rows: [],
        });
      }
      buckets.get(key)!.rows.push(row);
    }

    return Array.from(buckets.values())
      .map(({groupKey, label, rows}) => ({
        groupKey,
        label,
        value: getReducedValue(rows, reduceBy, campo),
      }))
      .filter(d => d.value > 0)
      .sort((a, b) => b.value - a.value);
  });


  tiles: Signal<TreemapTile[]> = computed(() => {
    const items = this.aggregatedTree();
    const {reduceBy} = this.currentReduce()!;
    if (!items.length) return [];

    const layout = squarify(items, {x: 0, y: 0, w: 100, h: 100});

    return layout.map((tile, i: number) => {
      const w = tile.x + tile.w >= 99.999 ? 100 - tile.x : tile.w;
      const h = tile.y + tile.h >= 99.999 ? 100 - tile.y : tile.h;
      return {
        label: tile.label,
        value: tile.value,
        formattedValue: this.multiples.transform(tile.value),
        x: tile.x,
        y: tile.y,
        w,
        h,
        color: this.gradients()[i]
      };
    });
  });
  categoria = input<string>('');

  // ── Hover / touch tooltip ─────────────────────────────────────────────────────
  private readonly wrapperRef = viewChild<ElementRef<HTMLElement>>('wrapper');
  private readonly tooltipRef = viewChild(ChartTooltipComponent, {read: ElementRef});

  protected hoveredTile = signal<TreemapTile | null>(null);
  protected pointer = signal<{ x: number; y: number }>({x: 0, y: 0});
  /** True while the tooltip is driven by touch: it then stays open and can be tapped to dismiss. */
  protected touchMode = signal<boolean>(false);

  protected onTileEnter(tile: TreemapTile, event: MouseEvent) {
    if (this.touchMode()) return;
    this.hoveredTile.set(tile);
    this.positionTooltip(event.clientX, event.clientY);
  }

  protected onTileMove(event: MouseEvent) {
    if (this.touchMode()) return;
    this.positionTooltip(event.clientX, event.clientY);
  }

  protected onTileLeave() {
    if (this.touchMode()) return;
    this.hoveredTile.set(null);
  }

  protected onTileTouch(tile: TreemapTile, event: TouchEvent) {
    // Suppress the synthesized mouse events that would otherwise fight with touch handling.
    event.preventDefault();
    const touch = event.changedTouches[0];
    this.touchMode.set(true);
    if (this.hoveredTile() === tile) {
      this.hoveredTile.set(null);
    } else {
      this.hoveredTile.set(tile);
      this.positionTooltip(touch.clientX, touch.clientY);
    }
  }

  /** Dismiss the tooltip when it is tapped on a touch device. */
  protected onTooltipClick() {
    if (!this.touchMode()) return;
    this.hoveredTile.set(null);
    this.touchMode.set(false);
  }

  /**
   * Override the raw event coordinates so the tooltip always renders inside the chart area.
   * Clamps immediately with the current (or fallback) tooltip size, then re-clamps on the next
   * frame once the tooltip has rendered and its real dimensions are measurable.
   */
  private positionTooltip(clientX: number, clientY: number) {
    this.updateTooltipPosition(clientX, clientY);
    requestAnimationFrame(() => this.updateTooltipPosition(clientX, clientY));
  }

  /** Position the tooltip next to the pointer, clamped to stay within the treemap container. */
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

    // Flip to the other side of the pointer when it would overflow, then hard-clamp inside the wrapper.
    let x = clientX + offset;
    if (x + tipW > bounds.right) x = clientX - offset - tipW;
    x = Math.min(Math.max(x, bounds.left), Math.max(bounds.right - tipW, bounds.left));

    let y = clientY + offset;
    if (y + tipH > bounds.bottom) y = clientY - offset - tipH;
    y = Math.min(Math.max(y, bounds.top), Math.max(bounds.bottom - tipH, bounds.top));

    this.pointer.set({x, y});
  }

  protected onReduceChange($event: MatButtonToggleChange) {
    this.currentReduce.set($event.value as ReduceByDeclaration);
  }

  protected onFilterChange($event: FilterOptionInterface[]) {
    this.appliedFilters.set($event.filter((f: FilterOptionInterface) => f.value));
  }

  protected getBarBackground(rotation: string = '0deg'): string {

    return getRandomGradient(this.categoria(), rotation);
  }
}

// ── Squarify layout ───────────────────────────────────────────────────────────

interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface Item {
  label: string;
  value: number;
  groupKey: string;
}

interface LayoutItem extends Item {
  area: number;
}

interface LayoutTile extends Item {
  x: number;
  y: number;
  w: number;
  h: number;
}

function squarify(items: Item[], rect: Rect): LayoutTile[] {
  const total = items.reduce((s, d) => s + d.value, 0);
  const area = rect.w * rect.h;
  const withArea: LayoutItem[] = items.map(d => ({...d, area: (d.value / total) * area}));
  return layout(withArea, rect);
}

function layout(items: LayoutItem[], rect: Rect): LayoutTile[] {
  if (!items.length) return [];
  if (items.length === 1) return [{...items[0], x: rect.x, y: rect.y, w: rect.w, h: rect.h}];

  const [row, rest] = bestRow(items, rect);
  const rowArea = row.reduce((s, i) => s + i.area, 0);
  const tiles: LayoutTile[] = [];

  if (rect.w >= rect.h) {
    const stripW = rowArea / rect.h;
    let y = rect.y;
    for (let j = 0; j < row.length; j++) {
      const item = row[j];
      const h = j === row.length - 1 ? rect.y + rect.h - y : item.area / stripW;
      tiles.push({...item, x: rect.x, y, w: stripW, h});
      y += h;
    }
    const nextX = rect.x + stripW;
    return tiles.concat(layout(rest, {x: nextX, y: rect.y, w: rect.x + rect.w - nextX, h: rect.h}));
  } else {
    const stripH = rowArea / rect.w;
    let x = rect.x;
    for (let j = 0; j < row.length; j++) {
      const item = row[j];
      const w = j === row.length - 1 ? rect.x + rect.w - x : item.area / stripH;
      tiles.push({...item, x, y: rect.y, w, h: stripH});
      x += w;
    }
    const nextY = rect.y + stripH;
    return tiles.concat(layout(rest, {x: rect.x, y: nextY, w: rect.w, h: rect.y + rect.h - nextY}));
  }
}

function bestRow(items: LayoutItem[], rect: Rect): [LayoutItem[], LayoutItem[]] {
  const short = Math.min(rect.w, rect.h);
  let best: LayoutItem[] = [];
  let bestRatio = Infinity;

  for (let i = 0; i < items.length; i++) {
    const candidate = items.slice(0, i + 1);
    const ratio = worstRatio(candidate, short);
    if (ratio <= bestRatio) {
      bestRatio = ratio;
      best = candidate;
    } else {
      break;
    }
  }

  return [best, items.slice(best.length)];
}

function worstRatio(row: LayoutItem[], short: number): number {
  const total = row.reduce((s, i) => s + i.area, 0);
  return Math.max(...row.map(i => {
    const w = (i.area / total) * short;
    const h = total / short;
    return Math.max(w / h, h / w);
  }));
}

function formatEuro(v: number): string {
  return new Intl.NumberFormat('it-IT', {style: 'currency', currency: 'EUR', maximumFractionDigits: 0}).format(v);
}
