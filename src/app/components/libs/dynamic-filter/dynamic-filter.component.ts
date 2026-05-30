import {
  Component,
  computed,
  effect,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {TitleCasePipe} from '@angular/common';
import {debounceTime, distinctUntilChanged} from 'rxjs';
import {MatFormField, MatInput, MatLabel, MatSuffix} from '@angular/material/input';
import {
  MatAutocomplete,
  MatAutocompleteTrigger,
  MatOption,
} from '@angular/material/autocomplete';
import {DataInterface, FilterOptionInterface} from '../../../interfaces';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'sheldon-dynamic-filter',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TitleCasePipe,
    MatOption,
    MatLabel,
    MatFormField,
    MatInput,
    MatSuffix,
    MatIconButton,
    MatIcon,
    MatAutocompleteTrigger,
    MatAutocomplete,
  ],
  templateUrl: './dynamic-filter.component.html',
  styleUrl: './dynamic-filter.component.scss',
})
export class DynamicFilterComponent<T extends Record<string, unknown>> {
  /** String array of field names to filter on, e.g. ['nome_comune', 'unione'] */
  filterBy = input<string[]>([]);

  /**
   * The full dataset. The component uses it to derive cascading autocomplete
   * options: when one field is set, only values present in the matching rows
   * are offered in the other fields.
   */
  dataset = input<DataInterface[]>([]);

  masterField = input<string | null>(null);
  /** Emits the full form value on every (debounced) change */
  filterChange = output<FilterOptionInterface[]>();

  private fb = inject(FormBuilder);

  fields = computed(() =>
    (this.filterBy() ?? []).map((f) => f.trim()).filter(Boolean)
  );

  filterForm: FormGroup = this.fb.group({});

  /**
   * Reactive snapshot of the current form value, updated on every keystroke.
   * Stored as a signal so computed() chains stay reactive.
   */
  private formValue = signal<Record<string, string>>({});

  constructor() {
    effect(() => this._buildForm(this.fields()));
  }

  // ---------------------------------------------------------------------------
  // Cascading autocomplete logic
  // ---------------------------------------------------------------------------

  /**
   * Returns the autocomplete options for `field`, constrained by whatever
   * values are already set in the *other* fields.
   *
   * Steps:
   *  1. Start with the full dataset.
   *  2. For every OTHER field that has a non-empty value, keep only rows
   *     where that column matches.
   *  3. Collect distinct values of `field` from the surviving rows.
   *  4. Narrow further by the partial text the user has typed in THIS field.
   */
  filteredOptions(field: string): FilterOptionInterface[] {
    const data = this.dataset();
    if (!data.length) return [];

    const currentValues = this.formValue();

    const isMasterField = field === this.masterField();
    const constrainedRows = isMasterField
      ? data
      : data.filter((row) =>
        this.fields()
          .filter((f) => f !== field)
          .every((f) => {
            const active = (currentValues[f] ?? '').trim();
            return !active || String((row as any)[f] ?? '') === active;
          })
      );


    // 3 — distinct values for this field from surviving rows
    const distinctValues = [
      ...new Set(constrainedRows.map((row) => String((row as any)[field] ?? ''))),
    ].filter(Boolean).sort();

    // 4 — narrow by partial text typed in this field
    const query = (currentValues[field] ?? '').toLowerCase();


    const isExactMatch = isMasterField && distinctValues.some((v) => v.toLowerCase() === query);
    const matched = (query && !isExactMatch)
      ? distinctValues.filter((v) => v.toLowerCase().includes(query))  // still typing
      : distinctValues;                                                  // selected or empty → show all
    return matched.map((v) => ({key: v, value: v}));
  }

  hasValue(field: string): boolean {
    return !!(this.formValue()[field] ?? '').trim();
  }

  clearField(field: string, trigger: MatAutocompleteTrigger): void {
    this.filterForm.get(field)?.setValue('', {emitEvent: true});
    trigger.autocomplete.options.filter(o => o.selected).map(o => o.deselect());
    trigger.closePanel();
  }

  // ---------------------------------------------------------------------------

  private _buildForm(fields: string[]): void {
    const previous: Record<string, string> = this.filterForm?.value ?? {};

    const controls: Record<string, [string]> = {};
    for (const field of fields) {
      controls[field] = [previous[field] ?? ''];
    }

    this.filterForm = this.fb.group(controls);

    // Keep formValue signal in sync so filteredOptions() stays reactive
    this.filterForm.valueChanges.subscribe((v) => this.formValue.set(v));

    // When the master field is set to a recognised option, reset all other fields
    const master = this.masterField();
    if (master && this.filterForm.contains(master)) {
      this.filterForm.get(master)!.valueChanges
        .pipe(distinctUntilChanged())
        .subscribe((masterValue: string) => {
          const isKnownOption = this.dataset().some(
            (row) => String((row as any)[master] ?? '') === masterValue
          );
          if (isKnownOption) {
            fields
              .filter((f) => f !== master)
              .forEach((f) => this.filterForm.get(f)?.setValue('', {emitEvent: true}));
          }
        });
    }

    // Emit debounced output
    this.filterForm.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b))
      )
      .subscribe((value) => {
        const filters: FilterOptionInterface[] = Object.keys(value).map(k => ({key: k, value: value[k]}));
        this.filterChange.emit(filters);
      });
  }
}
