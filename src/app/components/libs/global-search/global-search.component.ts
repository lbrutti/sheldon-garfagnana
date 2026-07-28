import {Component, computed, effect, inject, input, output, Signal, signal, untracked} from '@angular/core';
import {MatFormField, MatInput, MatInputModule, MatSuffix} from '@angular/material/input';
import {MatOption, MatSelect} from '@angular/material/select';
import {MatAutocomplete, MatAutocompleteTrigger} from '@angular/material/autocomplete';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
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
    MatFormField,
    MatInput,
    MatSuffix,
    MatOption,
    MatAutocomplete,
    MatAutocompleteTrigger,
    MatIconButton,
    MatIcon,
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
  private readonly _unioneNorm = signal<string>('');

  comuneInput = new FormControl<string>('');
  private readonly _selectedComune = signal<FilterOptionInterface | null>(null);

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

  comuneOptions: Signal<FilterOptionInterface[]> = computed(() => {
    const unione = this._unioneNorm();
    const pool = unione
      ? this.interventi().filter(i => i.unione.trim() === unione)
      : this.interventi();
    return Array.from(new Set(pool.map(i => i.comune.trim())))
      .filter(Boolean)
      .sort((a, b) => a.localeCompare(b))
      .map(c => ({label: c, value: c, key: 'comune'}));
  });

  protected filteredComuneOptions(): FilterOptionInterface[] {
    const options = this.comuneOptions();
    const query = (this.comuneInput.value ?? '').trim().toLowerCase();
    if (!query) return options;
    const isExactMatch = options.some(o => o.value.toLowerCase() === query);
    return isExactMatch ? options : options.filter(o => o.value.toLowerCase().includes(query));
  }

  protected hasComuneValue(): boolean {
    return !!this._selectedComune();
  }

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
        this._unioneNorm.set(match.value);
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

    if (params['comune']) {
      const match = this.comuneOptions().find(c => c.value === params['comune']);
      if (match) {
        this.comuneInput.setValue(match.value, {emitEvent: false});
        this._selectedComune.set(match);
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
        comune: this._selectedComune()?.value || null,
      },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  private emitFilter(): void {
    const selectedChips = (this.chipSet.value ?? [])
      .map(v => this.chips().find(c => c.value === v))
      .filter((c): c is FilterOptionInterface => !!c);
    this.filter.emit(
      [this.selectUnione.value, this._selectedComune(), ...selectedChips].filter(f => f),
    );
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

  protected handleUnioneSelect(): void {
    this._unioneNorm.set(this.selectUnione.value?.value ?? '');
    // the previously selected comune may not belong to the new unione, so reset it
    this.resetComune();
    this.applyFilter();
  }

  protected onComuneSelected(value: string): void {
    const option = this.comuneOptions().find(c => c.value === value) ?? null;
    this._selectedComune.set(option);
    this.applyFilter();
  }

  protected clearComune(trigger: MatAutocompleteTrigger, inputEl: HTMLInputElement): void {
    this.resetComune();
    this.applyFilter();

    setTimeout(() => {
      inputEl.blur();
      trigger.closePanel();
    }, 0);
  }

  private resetComune(): void {
    this.comuneInput.setValue('', {emitEvent: false});
    this._selectedComune.set(null);
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
