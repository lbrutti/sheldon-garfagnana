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
import {getReducedValue} from '../../../utils';
import {applyGradient, GradientDescriptor, resolveGradientDescriptor} from '../../../utils/color.utils';

type ReduceMode = 'sum' | 'count' | 'max';

export interface AuxReduceOption {
  campo: string;
  reduceBy: ReduceMode;
}

const STEP_PRESETS: string[][] = [
  ['--color-gradient-a-start', '--color-gradient-a-mid', '--color-gradient-a-end'],
  ['--color-gradient-b-start', '--color-gradient-b-mid', '--color-gradient-b-end'],
  ['--color-gradient-c-start', '--color-gradient-c-mid', '--color-gradient-c-end'],
  ['--color-gradient-d-start', '--color-gradient-d-end'],
  ['--color-gradient-e-start', '--color-gradient-e-end'],
];

@Component({
  selector: 'sheldon-chart-treemap',
  imports: [
    CardComponent,
    MatButtonToggleGroup,
    MatButtonToggle,
    BaseChartDirective,
    DynamicFilterComponent,
  ],
  templateUrl: './chart-treemap.component.html',
  styleUrl: './chart-treemap.component.scss',
})
export default class ChartTreemapComponent implements OnInit {

  title = input<string>('Treemap');
  data = input<TreemapDataInterface[]>([]);
  groups = input<(keyof TreemapDataInterface & string)[]>(['comune']);

  campo = input<string>('valore');
  reduceBy = input<ReduceMode>('sum');
  auxReduce = input<AuxReduceOption[]>([]);

  filterBy = input<string | null>(null);
  filtersFields = computed<string[]>((): string[] =>
    this.filterBy() !== null ? this.filterBy()!.split('|') : []
  );
  masterField = input<string | null>(null);
  protected appliedFilters = signal<FilterOptionInterface[]>([]);

  currentReduce = signal<AuxReduceOption | null>(null);

  private gradientDescriptors: GradientDescriptor[] = [];

  /**
   * Inline plugin that triggers one extra update immediately after the treemap
   * layout algorithm has run (afterLayout), ensuring element coordinates are
   * finalised before backgroundColor is called. The flag prevents a loop.
   */
  readonly gradientInitPlugin = {
    id: 'gradientInit',
    afterLayout(chart: any) {
      if (chart.__gradientInit) return;
      chart.__gradientInit = true;
      chart.update();
    },
  };

  ngOnInit(): void {
    this.currentReduce.set({campo: this.campo(), reduceBy: this.reduceBy()});
    this.gradientDescriptors = STEP_PRESETS.map(steps => resolveGradientDescriptor(steps));
  }

  protected filteredData = computed<TreemapDataInterface[]>(() => {
    const filterSet = this.appliedFilters().length && this.appliedFilters().some(d => d.value);
    if (!filterSet) return this.data();
    return this.data().filter(d =>
      this.appliedFilters().every(f => f.value.length && f.value === `${d[f.key]}`)
    );
  });

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

  /** Maps each unique outer-group value to a stable preset index. */
  protected groupIndexMap = computed<Map<string, number>>(() => {
    const outerField = this.groups()[0];
    const unique = [...new Set(this.aggregatedTree().map(d => `${d[outerField] ?? '—'}`))];
    return new Map(unique.map((g, i) => [g, i % STEP_PRESETS.length]));
  });

  chartData: Signal<ChartData<'treemap'>> = computed(() => {
    const outerField = this.groups()[0];
    const innerField = this.groups()[this.groups().length - 1];
    const indexMap = this.groupIndexMap();
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
            // Guard: chartArea is undefined on the very first layout pass.
            // Returning undefined here causes Chart.js to retry on the next pass
            // when coordinates are finalised — same pattern as the official sample.
            const {ctx: canvasCtx, chartArea} = ctx.chart;
            if (!chartArea) return undefined;
            const el = ctx.element;
            const x: number = el.x - el.width / 2;
            const y: number = el.y - el.height / 2;
            const w: number = el.width;
            const h: number = el.height;
            if (!isFinite(x) || !isFinite(y) || !isFinite(w) || !isFinite(h) || w <= 0 || h <= 0) {
              return 'transparent';
            }
            const g = `${ctx.raw._data[outerField] ?? '—'}`;
            const descriptor = this.gradientDescriptors[indexMap.get(g) ?? 0];
            return applyGradient(canvasCtx, x, y, x + w, y + h, descriptor);
          },
          labels: {
            align: 'left',
            display: true,
            formatter: (ctx: any) => {
              if (ctx.type !== 'data') return 'transparent';
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
    events: [],
    plugins: {
      legend: {display: false},
      tooltip: {enabled: false, events: []},
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
