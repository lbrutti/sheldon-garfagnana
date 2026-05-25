import {
  Component,
  computed,
  input,
  OnInit,
  signal,
  Signal,
} from '@angular/core';
import {Chart, ChartConfiguration} from 'chart.js';
import {TreemapController, TreemapElement} from 'chartjs-chart-treemap';

Chart.register(TreemapController, TreemapElement);

import CardComponent from '../card/card.component';
import {MatButtonToggle, MatButtonToggleChange, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {BaseChartDirective} from 'ng2-charts';
import {ChartData} from 'chart.js';
import {DynamicFilterComponent} from '../dynamic-filter/dynamic-filter.component';
import {FilterOptionInterface, TreemapDataInterface} from '../../../interfaces';
import {getReducedValue, createLinearGradient} from '../../../utils';

type ReduceMode = 'sum' | 'count' | 'max';

export interface AuxReduceOption {
  campo: string;
  reduceBy: ReduceMode;
}

@Component({
  selector: 'sheldon-chart-treemap',
  imports: [
    CardComponent,
    MatButtonToggleGroup,
    MatButtonToggle,
    BaseChartDirective,
    DynamicFilterComponent,
  ],
  templateUrl: './claude-treemap.component.html',
  styleUrl: './claude-treemap.component.scss',
})
export default class ChartTreemapComponent implements OnInit {

  title = input<string>('Treemap');
  data = input<TreemapDataInterface[]>([]);

  /**
   * Fields to group by hierarchically, in order.
   * e.g. ['unione', 'comune'] → outer group unione, inner group comune.
   */
  groups = input<(keyof TreemapDataInterface & string)[]>(['comune']);

  /** Default reduce field and function, mirroring ChartBarComponent. */
  campo = input<string>('valore');
  reduceBy = input<ReduceMode>('sum');

  /**
   * Additional reduce options rendered as toggle buttons, identical in shape
   * to the auxReduce input of ChartBarComponent.
   */
  auxReduce = input<AuxReduceOption[]>([]);

  filterBy = input<string | null>(null);
  filtersFields = computed<string[]>((): string[] =>
    this.filterBy() !== null ? this.filterBy()!.split('|') : []
  );
  masterField = input<string | null>(null);
  protected appliedFilters = signal<FilterOptionInterface[]>([]);

  currentReduce = signal<AuxReduceOption | null>(null);

  ngOnInit(): void {
    this.currentReduce.set({campo: this.campo(), reduceBy: this.reduceBy()});
  }

  protected filteredData = computed<TreemapDataInterface[]>(() => {
    const filterSet = this.appliedFilters().length && this.appliedFilters().some(d => d.value);
    if (!filterSet) return this.data();
    return this.data().filter(d =>
      this.appliedFilters().every(f => f.value.length && f.value === `${d[f.key]}`)
    );
  });

  /**
   * Pre-aggregate the flat data into one record per unique group-key combination,
   * using getReducedValue from utils. The library receives rows with a single
   * numeric `_value` field and no further `groups` — grouping has already happened.
   *
   * This is necessary because chartjs-chart-treemap's internal aggregation is
   * always `sum`; count and max must be computed before handing data to the chart.
   */
  protected aggregatedTree = computed<(Record<string, any> & { _value: number })[]>(() => {
    const raw = this.filteredData();
    const groupFields = this.groups();
    const {campo, reduceBy} = this.currentReduce()!;

    const buckets = new Map<string, { meta: Record<string, any>; rows: TreemapDataInterface[] }>();

    for (const row of raw) {
      const key = groupFields.map(f => `${row[f] ?? '—'}`).join('||');
      if (!buckets.has(key)) {
        const meta: Record<string, any> = {};
        groupFields.forEach(f => (meta[f] = row[f] ?? '—'));
        buckets.set(key, {meta, rows: []});
      }
      buckets.get(key)!.rows.push(row);
    }

    return Array.from(buckets.values()).map(({meta, rows}) => ({
      ...meta,
      _value: getReducedValue(rows, reduceBy, campo),
    }));
  });

  /**
   * Maps each unique outer-group value to gradient step arrays (CSS var names).
   * Clears the gradient cache whenever data changes so stale gradients are never reused.
   */
  protected groupGradientSteps = computed<Map<string, string[]>>(() => {
    const outerField = this.groups()[0];
    const unique = [...new Set(this.aggregatedTree().map(d => `${d[outerField] ?? '—'}`))];
    this.gradientCache.clear();
    return new Map(unique.map((g, i) => [g, buildGroupSteps(i)]));
  });

  /**
   * Runtime gradient cache keyed by group name.
   * Gradients are per-tile objects tied to canvas coordinates, so they cannot
   * be shared across tiles — the cache key is therefore `{group}:{x}:{y}` to
   * guarantee each tile gets its own gradient while avoiding redundant redraws
   * within a single render pass.
   */
  private gradientCache = new Map<string, CanvasGradient>();

  chartData: Signal<ChartData<'treemap'>> = computed(() => {
    const outerField = this.groups()[0];
    const innerField = this.groups()[this.groups().length - 1];
    const stepsMap = this.groupGradientSteps();
    const {reduceBy} = this.currentReduce()!;

    return {
      datasets: [
        {
          label: this.title(),
          tree: this.aggregatedTree(),
          key: '_value',
          borderWidth: 0,
          borderRadius: 4,
          spacing: 2,
          backgroundColor: (ctx: any) => {
            if (ctx.type !== 'data') return 'transparent';

            // Coordinates come from the rendered element, not ctx.raw, which
            // holds logical data values and may contain NaN before layout runs.
            const el: TreemapElement = ctx.element;
            const {x, y, width, height} = el.getProps(['x', 'y', 'width', 'height'], true);

            if (!isFinite(x) || !isFinite(y) || !isFinite(width) || !isFinite(height)) {
              return 'transparent';
            }

            const g = `${ctx.raw._data[outerField] ?? '—'}`;
            // Cache key includes position so each tile gets its own gradient object
            const cacheKey = `${g}:${Math.round(x)}:${Math.round(y)}`;
            if (this.gradientCache.has(cacheKey)) return this.gradientCache.get(cacheKey)!;

            const canvasCtx: CanvasRenderingContext2D = ctx.chart.ctx;
            const steps = stepsMap.get(g) ?? ['#444', '#888'];
            // Diagonal gradient from top-left to bottom-right of the tile
            const gradient = createLinearGradient(canvasCtx, x, y, x + width, y + height, steps);
            this.gradientCache.set(cacheKey, gradient);
            return gradient;
          },
          labels: {
            align: 'left',
            display: true,
            formatter: (ctx: any): string[] | null => {
              if (ctx.type !== 'data') return null;
              const d = ctx.raw._data;
              const label = d[innerField] ?? d[outerField] ?? '';
              const val: number = ctx.raw.v;
              return [
                `${label}`,
                reduceBy === 'sum' ? formatEuro(val) : `${val}`,
              ];
            },
            color: ['#fff', 'rgba(255,255,255,0.9)'],
            backgroundColor: ['rgba(0,0,0,0.45)', 'rgba(0,0,0,0.3)'],
            font: [{size: 12, weight: 'bold'}, {size: 10}],
            position: 'top',
            padding: 4,
          },
        } as any,
      ],
    };
  });

  public treemapOptions: Signal<ChartConfiguration<'treemap'>['options']> = computed(() => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {display: false},
      tooltip: {enabled: false},
    },
  } as any));

  public treemapType = 'treemap' as const;

  protected onReduceChange($event: MatButtonToggleChange) {
    this.currentReduce.set($event.value as AuxReduceOption);
  }

  protected onFilterChange($event: FilterOptionInterface[]) {
    this.appliedFilters.set($event.filter((f: FilterOptionInterface) => f.value));
  }
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function formatEuro(v: number): string {
  return new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(v);
}

const STEP_PRESETS: string[][] = [
  ['--color-gradient-a-start', '--color-gradient-a-mid', '--color-gradient-a-end'],
  ['--color-gradient-b-start', '--color-gradient-b-mid', '--color-gradient-b-end'],
  ['--color-gradient-c-start', '--color-gradient-c-mid', '--color-gradient-c-end'],
  ['--color-gradient-d-start', '--color-gradient-d-end'],
  ['--color-gradient-e-start', '--color-gradient-e-end'],
];

function buildGroupSteps(index: number): string[] {
  return STEP_PRESETS[index % STEP_PRESETS.length];
}
