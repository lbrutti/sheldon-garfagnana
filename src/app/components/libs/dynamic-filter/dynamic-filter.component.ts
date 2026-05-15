import {
  Component,
  computed,
  effect,
  inject,
  input,
  output,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import {TitleCasePipe} from '@angular/common';
import {debounceTime, distinctUntilChanged} from 'rxjs';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from '@angular/material/autocomplete';

export interface FilterOption {
  key: string;
  value: string;
}

@Component({
  selector: 'sheldon-dynamic-filter',
  standalone: true,
  imports: [ReactiveFormsModule, TitleCasePipe, MatInput, MatAutocomplete, MatOption, MatAutocompleteTrigger, MatLabel, MatFormField],
  templateUrl: './dynamic-filter.component.html',
  styleUrl: './dynamic-filter.component.scss',
})
export class DynamicFilterComponent {
  /** Pipe-separated list of fields, e.g. 'nome_comune|unione' */
  filterBy = input<string>('');

  /**
   * Map of field name → options for autocomplete.
   * e.g. { nome_comune: [{ key: 'Roma', value: 'Roma' }, ...] }
   * Fields with no entry get a plain matInput with no autocomplete.
   */
  options = input<Record<string, FilterOption[]>>({});

  /** Emits the full form value on every (debounced) change */
  filterChange = output<Record<string, string>>();

  private fb = inject(FormBuilder);

  /** Derived signal: splits filterBy into field name array */
  fields = computed(() =>
    (this.filterBy() ?? '')
      .split('|')
      .map((f) => f.trim())
      .filter(Boolean)
  );

  filterForm: FormGroup = this.fb.group({});

  constructor() {
    effect(() => this._buildForm(this.fields()));
  }

  /** All options for a given field (empty array → plain input) */
  optionsFor(field: string): FilterOption[] {
    return this.options()?.[field] ?? [];
  }

  /**
   * Options filtered by the current control value.
   * Matches against both key and value, case-insensitive.
   */
  filteredOptions(field: string): FilterOption[] {
    const all = this.optionsFor(field);
    if (!all.length) return [];

    const query = (this.filterForm.get(field)?.value ?? '').toLowerCase();
    if (!query) return all;

    return all.filter(
      (o) =>
        o.key.toLowerCase().includes(query) ||
        o.value.toLowerCase().includes(query)
    );
  }

  // ---------------------------------------------------------------------------

  private _buildForm(fields: string[]): void {
    const previous: Record<string, string> = this.filterForm?.value ?? {};

    const controls: Record<string, [string]> = {};
    for (const field of fields) {
      controls[field] = [previous[field] ?? ''];
    }

    this.filterForm = this.fb.group(controls);

    this.filterForm.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b))
      )
      .subscribe((value) => this.filterChange.emit(value));
  }

}
