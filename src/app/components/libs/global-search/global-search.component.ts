import {Component, computed, effect, inject, input, output, Signal, signal, untracked} from '@angular/core';
import {MatFormField, MatInputModule} from '@angular/material/input';
import {MatOption, MatSelect} from '@angular/material/select';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {toSignal} from '@angular/core/rxjs-interop';
import {MatButtonToggle, MatButtonToggleChange, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {ActivatedRoute, Router} from '@angular/router';
import {FilterOptionInterface, InterventoInterface} from '../../../interfaces';
import ThemeSwitchComponent from '../theme-switch/theme-switch.component';
import {normalizzaStringa} from '../../../utils';
import {TranslocoModule} from '@jsverse/transloco';

@Component({
  selector: 'sheldon-global-search',
  imports: [
    MatInputModule,
    MatOption,
    FormsModule,
    ReactiveFormsModule,
    MatButtonToggle,
    MatButtonToggleGroup,
    MatSelect,
    ThemeSwitchComponent,
    TranslocoModule,
  ],
  templateUrl: './global-search.component.html',
  styleUrl: './global-search.component.scss',
})
export default class GlobalSearchComponent {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  selectUnione = new FormControl<FilterOptionInterface>({key: '', value: ''});
  selectUnioneSignal = toSignal(this.selectUnione.valueChanges);

  chipSet = new FormControl<string[]>([]);
  chipSetSignal = toSignal(this.chipSet.valueChanges);

  private readonly _activeChip = signal<string | null>(null);
  protected readonly activeChipNorm = computed<string | null>(() => {
    const v = this._activeChip();
    return v ? normalizzaStringa(v) : null;
  });
  protected readonly activeChipGradient = computed<string | null>(() => {
    const norm = this.activeChipNorm();
    return norm
      ? `linear-gradient(to left, var(--color-gradient-${norm}-start), var(--color-gradient-${norm}-end))`
      : null;
  });

  // single-value control backing the mobile categoria <mat-select>
  selectCategoria = new FormControl<FilterOptionInterface | string>('');

  interventi = input<InterventoInterface[]>([]);
  unioniNascoste = input<{unione: string}[]>([]);
  filter = output<FilterOptionInterface[]>();

  suggestions: Signal<FilterOptionInterface[]> = computed(() => {
    const unioni = Array.from(new Set(this.interventi().map(i => i.unione.trim())))
      .map(c => ({label: c.trim(), value: c.trim(), key: 'unione'}))
      .sort((a, b) => a.value.localeCompare(b.value));
    const nascoste = this.unioniNascoste()
      .map(u => ({label: `${u.unione.trim()} (WORK IN PROGRESS)`, value: u.unione.trim(), key: 'unione', disabled: true}))
      .sort((a, b) => a.value.localeCompare(b.value));
    return [{label: 'Tutte le unioni', key: 'unione', value: ''}, ...unioni, ...nascoste];
  });

  chips: Signal<FilterOptionInterface[]> = computed(() =>
    Array.from(new Set(this.interventi().flatMap(i => i.categoria.split('|')).map(c => c.trim())))
      .map(c => ({value: c.trim(), key: 'categoria', label:c.trim()}))
      .sort((a, b) => a.value.localeCompare(b.value)),
  );

  constructor() {
    // Restore filter state from URL once data is available (runs once)
    let restored = false;
    effect(() => {
      const chips = this.chips();
      const suggestions = this.suggestions();
      if (!restored && chips.length && suggestions.length > 1) {
        restored = true;
        untracked(() => this.restoreFromUrl());
      }
    });
  }

  private restoreFromUrl(): void {
    const params = this.route.snapshot.queryParams;
    let hasFilter = false;

    if (params['unione']) {
      const match = this.suggestions().find(s => s.value === params['unione']);
      if (match) {
        this.selectUnione.setValue(match, {emitEvent: false});
        hasFilter = true;
      }
    }

    if (params['categoria']) {
      const match = this.chips().find(c => c.value === params['categoria']);
      if (match) {
        this.setCategoria(match.value);
        hasFilter = true;
      }
    }

    if (hasFilter) {
      this.emitFilter();
    }
  }

  private updateQueryParams(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        unione: this.selectUnione.value?.value || null,
        categoria: this.chipSet.value?.[0] || null,
      },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  private emitFilter(): void {
    const selectedChips = (this.chipSet.value ?? [])
      .map(v => this.chips().find(c => c.value === v))
      .filter((c): c is FilterOptionInterface => !!c);
    this.filter.emit([this.selectUnione.value, ...selectedChips].filter(f => f));
  }

  protected applyFilter() {
    this.emitFilter();
    this.updateQueryParams();
  }

  protected handleToggle($event: MatButtonToggleChange) {
    // Enforce single-or-none: deselect all others when a new one is picked
    this.setCategoria($event.source.checked ? ($event.source.value as string) : null);
    this.applyFilter();
  }

  protected handleCategoriaSelect() {
    const value = this.selectCategoria.value;
    const option = value && typeof value === 'object' ? value : null;
    this.setCategoria(option ? option.value : null);
    this.applyFilter();
  }

  /** data-categoria for the closed categoria select (drives its gradient background) */
  protected get selectedCategoria(): string | null {
    const value = this.selectCategoria.value;
    return value && typeof value === 'object' ? normalizzaStringa(value.value) : null;
  }

  /** Keep the toggle group (chipSet), the categoria select, and the active-chip signal in sync from one source. */
  private setCategoria(value: string | null): void {
    this.chipSet.setValue(value ? [value] : [], {emitEvent: false});
    const option = value ? this.chips().find(c => c.value === value) ?? null : null;
    this.selectCategoria.setValue(option ?? '', {emitEvent: false});
    this._activeChip.set(value);
  }

  protected readonly normalizzaStringa = normalizzaStringa;
}
