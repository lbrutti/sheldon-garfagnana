import {
  Component,
  computed,
  input,
  OnInit,
  signal,
  Signal,
} from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js';
import { TreemapController, TreemapElement } from 'chartjs-chart-treemap';

Chart.register(TreemapController, TreemapElement);

import CardComponent from '../card/card.component';
import { MatButtonToggle, MatButtonToggleChange, MatButtonToggleGroup } from '@angular/material/button-toggle';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData } from 'chart.js';
import { DynamicFilterComponent } from '../dynamic-filter/dynamic-filter.component';
import {FilterOptionInterface, TreemapDataInterface} from '../../../interfaces';


type ReduceMode = 'count' | 'sum';

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
   * Ordered list of fields to group by hierarchically.
   * e.g. ['unione', 'comune'] → first level unione, second level comune
   */
  groups = input<(keyof TreemapDataInterface)[]>(['comune']);

  filterBy = input<string | null>(null);
  filtersFields = computed<string[]>((): string[] => {
    return this.filterBy() !== null ? this.filterBy()!.split('|') : [];
  });
  masterField = input<string | null>(null);
  protected appliedFilters = signal<FilterOptionInterface[]>([]);

  reduceMode = signal<ReduceMode>('count');

  ngOnInit(): void {}

  protected filteredData = computed<TreemapDataInterface[]>(() => {
    const filterSet = this.appliedFilters().length && this.appliedFilters().some(d => d.value);
    if (!filterSet) return this.data();
    return this.data().filter(d =>
      this.appliedFilters().every(filter =>
        filter.value.length && (filter.value === `${(d as any)[filter.key]}`)
      )
    );
  });

  /**
   * Builds a flat list of leaf-level aggregated entries for the treemap dataset.
   * Each entry carries the full group path for label rendering.
   */
  protected treeData = computed<{ g: string; v: number; label: string }[]>(() => {
    const raw = this.filteredData();
    const groupFields = this.groups();
    const mode = this.reduceMode();

    // Group by the concatenated key path
    const map = new Map<string, { items: TreemapDataInterface[]; label: string }>();

    for (const item of raw) {
      const keyParts = groupFields.map(f => `${item[f] ?? '—'}`);
      const key = keyParts.join('||');
      if (!map.has(key)) {
        map.set(key, { items: [], label: keyParts[keyParts.length - 1] });
      }
      map.get(key)!.items.push(item);
    }

    return Array.from(map.entries()).map(([key, { items, label }]) => {
      const v = mode === 'count' ? items.length : items.reduce((acc, d) => acc + (d.valore ?? 0), 0);
      // Use the first-level group as `g` for treemap grouping
      const g = groupFields.length > 1 ? `${items[0][groupFields[0]] ?? '—'}` : 'all';
      return { g, v, label };
    });
  });

  chartData: Signal<ChartData<'treemap'>> = computed(() => {
    const entries = this.treeData();
    const mode = this.reduceMode();

    // Build a color palette indexed by unique `g` values
    const groups = [...new Set(entries.map(e => e.g))];
    const palette = generatePalette(groups.length);
    const groupColorMap = new Map(groups.map((g, i) => [g, palette[i]]));

    return {
      datasets: [
        {
          label: mode === 'count' ? 'Numero progetti' : 'Valore (€)',
          tree: entries,
          key: 'v',
          groups: ['g'],
          captions: {
            display: true,
            color: '#fff',
            font: { weight: 'bold', size: 13 },
            padding: 4,
          },
          labels: {
            display: true,
            formatter: (ctx: any) => {
              const item = ctx.raw as any;
              const label = item._data?.label ?? item.g ?? '';
              const val = item.v;
              return mode === 'count'
                ? [`${label}`, `${val}`]
                : [`${label}`, formatEuro(val)];
            },
            color: ['#fff', 'rgba(255,255,255,0.8)'],
            font: [{ weight: 'bold', size: 12 }, { size: 10 }],
            position: 'middle',
            overflow: 'hidden',
          } as any,
          backgroundColor: (ctx: any) => {
            const item = ctx.raw as any;
            if (!item) return 'rgba(0,0,0,0)';
            const g = item.g ?? 'all';
            const base = groupColorMap.get(g) ?? '#888';
            // Leaf vs group header: group header is slightly lighter
            return item._data ? base : lighten(base, 0.15);
          },
          borderColor: 'rgba(255,255,255,0.3)',
          borderWidth: 1,
          spacing: 2,
        } as any,
      ],
    };
  });

  public treemapOptions: Signal<ChartConfiguration<'treemap'>['options']> = computed(() => {
    const mode = this.reduceMode();
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            title: (items: any[]) => {
              const raw = items[0]?.raw as any;
              return raw?._data?.label ?? raw?.g ?? '';
            },
            label: (item: any) => {
              const raw = item.raw as any;
              const val = raw?.v ?? 0;
              return mode === 'count'
                ? `Progetti: ${val}`
                : `Valore: ${formatEuro(val)}`;
            },
          },
        },
      },
    } as any;
  });

  public treemapType = 'treemap' as const;

  protected onReduceModeChange($event: MatButtonToggleChange) {
    this.reduceMode.set($event.value as ReduceMode);
  }

  protected onFilterChange($event: FilterOptionInterface[]) {
    this.appliedFilters.set($event.filter((f: FilterOptionInterface) => f.value));
  }
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function formatEuro(v: number): string {
  return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(v);
}

/** Generate a set of visually distinct HSL colours */
function generatePalette(n: number): string[] {
  return Array.from({ length: n }, (_, i) => {
    const hue = Math.round((360 / n) * i + 200) % 360; // start from blue-ish
    return `hsl(${hue}, 55%, 42%)`;
  });
}

/** Lighten an hsl() string by mixing with white */
function lighten(color: string, amount: number): string {
  // Quick-and-dirty: bump the lightness for hsl strings
  return color.replace(/(\d+)%\)$/, (_, l) => `${Math.min(100, Number(l) + Math.round(amount * 100))}%)`);
}
