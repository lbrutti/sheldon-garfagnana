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
export default class ClaudeTreemapComponent implements OnInit {

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

    // Build a Map keyed by the joined group values, value = matching flat rows
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

  /** Colour palette keyed by unique values of the outermost group field. */
  protected groupColors = computed<Map<string, string>>(() => {
    const outerField = this.groups()[0];
    const unique = [...new Set(this.aggregatedTree().map(d => `${d[outerField] ?? '—'}`))];
    const palette = generatePalette(unique.length);
    return new Map(unique.map((g, i) => [g, palette[i]]));
  });

  chartData: Signal<ChartData<'treemap'>> = computed(() => {
    const outerField = this.groups()[0];
    const innerField = this.groups()[this.groups().length - 1];
    const colorMap = this.groupColors();
    const {reduceBy} = this.currentReduce()!;

    return {
      datasets: [
        {
          label: this.title(),
          tree: this.aggregatedTree(),
          // All aggregation is already done; the library only needs to size tiles.
          // With one row per group and no `groups` option, each row = one tile.
          key: '_value',
          borderWidth: 0,
          borderRadius: 4,
          spacing: 2,
          backgroundColor: (ctx: any) => {
            if (ctx.type !== 'data') return 'transparent';
            const g = `${ctx.raw._data[outerField] ?? '—'}`;
            return colorMap.get(g) ?? '#888';
          },
          labels: {
            align: 'left',
            display: true,
            formatter: (ctx: any): string[] | null => {
              if (ctx.type !== 'data') return null;
              const d = ctx.raw._data;
              const label = d[innerField] ?? d[outerField] ?? '';
              const val: number = ctx.raw.v;
              const formattedVal = reduceBy === 'sum'
                ? formatEuro(val)
                : `${val}`;
              return [`${label}`, formattedVal];
            },
            color: ['#fff', 'rgba(255,255,255,0.75)'],
            font: [{size: 12, weight: 'bold'}, {size: 10}],
            position: 'top',
          },
        } as any,
      ],
    };
  });

  public treemapOptions: Signal<ChartConfiguration<'treemap'>['options']> = computed(() => {
    const outerField = this.groups()[0];
    const innerField = this.groups()[this.groups().length - 1];
    const {reduceBy} = this.currentReduce()!;

    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {display: false},
        tooltip: {
          enable: false,
          callbacks: {
            title: (items: any[]) => {
              const d = items[0]?.raw?._data;
              return d?.[innerField] ?? d?.[outerField] ?? '';
            },
            label: (item: any) => {
              const val: number = item.raw?.v ?? 0;
              return reduceBy === 'sum'
                ? `Valore: ${formatEuro(val)}`
                : `${reduceBy === 'count' ? 'Progetti' : 'Max'}: ${val}`;
            },
          },
        },
      },
    } as any;
  });

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

function generatePalette(n: number): string[] {
  return Array.from({length: n}, (_, i) => {
    const hue = Math.round((360 / Math.max(n, 1)) * i + 200) % 360;
    return `hsl(${hue}, 55%, 42%)`;
  });
}
