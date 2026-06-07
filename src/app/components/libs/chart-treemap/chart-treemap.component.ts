import {
  Component,
  computed, Input,
  input,
  OnInit,
  signal,
  Signal,
} from '@angular/core';
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
    ChartTwoLinesLabelComponent
  ],
  providers: [DecimalPipe, MultiplesPipe],
  templateUrl: './chart-treemap.component.html',
  styleUrl: './chart-treemap.component.scss',
})
export default class ChartTreemapComponent implements OnInit {

  title = input<string>('Treemap');
  infoText = input<string>('');
  cardId = input<string>('');
  data = input<TreemapDataInterface[]>([]);
  groups = input<(keyof TreemapDataInterface & string)[]>(['comune']);

  campo = input<string>('valore');
  reduceBy = input<ReduceMode>('sum');
  auxReduce = input<ReduceByDeclaration[]>([]);

  filterBy = input<string | null>(null);
  filtersFields = computed<string[]>((): string[] =>
    this.filterBy() !== null ? this.filterBy()!.split('|') : []
  );
  masterField = input<string | null>(null);
  protected appliedFilters = signal<FilterOptionInterface[]>([]);

  currentReduce = signal<ReduceByDeclaration | null>(null);

  gradients: Signal<string[]> = computed(() => {
    return this.data().map(d => getRandomGradient(this.categoria(), '0deg'));
  });

  constructor(private readonly multiples: MultiplesPipe) {
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

    const buckets = new Map<string, { groupKey: string; label: string; rows: TreemapDataInterface[] }>();
    for (const row of raw) {
      const key = groupFields.map(f => `${row[f] ?? '—'}`).join('||');
      if (!buckets.has(key)) {
        buckets.set(key, {
          groupKey: `${row[outerField] ?? '—'}`,
          label: `${row[innerField] ?? '—'}`,
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

    return layout.map((tile, i: number) => ({
      label: tile.label,
      value: tile.value,
      formattedValue: this.multiples.transform(tile.value),
      x: tile.x,
      y: tile.y,
      w: tile.w,
      h: tile.h,
      color: this.gradients()[i]
    }));
  });
  categoria = input<string>('');

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
    for (const item of row) {
      const h = item.area / stripW;
      tiles.push({...item, x: rect.x, y, w: stripW, h});
      y += h;
    }
    return tiles.concat(layout(rest, {x: rect.x + stripW, y: rect.y, w: rect.w - stripW, h: rect.h}));
  } else {
    const stripH = rowArea / rect.w;
    let x = rect.x;
    for (const item of row) {
      const w = item.area / stripH;
      tiles.push({...item, x, y: rect.y, w, h: stripH});
      x += w;
    }
    return tiles.concat(layout(rest, {x: rect.x, y: rect.y + stripH, w: rect.w, h: rect.h - stripH}));
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
