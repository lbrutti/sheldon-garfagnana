import {Component, computed, input, output, Signal} from '@angular/core';
import {MatFormField, MatInputModule, MatLabel} from '@angular/material/input';
import {MatOption, MatSelect} from '@angular/material/select';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {toSignal} from '@angular/core/rxjs-interop';
import {MatButtonToggle, MatButtonToggleChange, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {FilterOptionInterface, InterventoInterface} from '../../../interfaces';


@Component({
  selector: 'sheldon-global-search',
  imports: [
    MatInputModule,
    MatFormField,
    MatOption,
    FormsModule,
    ReactiveFormsModule,
    MatButtonToggle,
    MatButtonToggleGroup,
    MatSelect,
  ],
  templateUrl: './global-search.component.html',
  styleUrl: './global-search.component.scss',
})

export default class GlobalSearchComponent {
  selectUnione = new FormControl<FilterOptionInterface>({key: '', value: ''});
  selectUnioneSignal = toSignal(this.selectUnione.valueChanges);

  chipSet = new FormControl<FilterOptionInterface[]>([]);
  chipSetSignal = toSignal(this.chipSet.valueChanges);


  interventi = input<InterventoInterface[]>([]);
  filter = output<(FilterOptionInterface)[]>();

  suggestions: Signal<FilterOptionInterface[]> = computed(() => {

    const unioni = Array.from(new Set(this.interventi()
      .map(i => i.unione.trim())))
      .map(c => ({
        label: c.trim(),
        value: c.trim(),
        key: 'unione'
      }))
      .sort((a, b) => a.value.localeCompare(b.value));

    return [{label: "Tutte le unioni", key: 'unione', value: ''}, ...unioni];
  });

  chips: Signal<FilterOptionInterface[]> = computed(() => {
    const chips = Array.from(new Set(this.interventi()
      .flatMap(i => i.categoria.split('|')).map(c => c.trim())))
      .map(c => ({
        value: c.trim(),
        key: 'categoria'
      }))
      .sort((a, b) => a.value.localeCompare(b.value));
    return chips;
  });


  protected applyFilter() {
    this.filter.emit([this.selectUnioneSignal(), ...(this.chipSetSignal() || [])].filter(f => f));
  }

  protected handleToggle($event: MatButtonToggleChange) {
    // Keep multiple mode but enforce single-or-none: deselect all others when a new one is picked
    this.chipSet.setValue($event.source.checked ? [$event.source.value] : []);
    this.filter.emit([this.selectUnioneSignal(), ...(this.chipSet.value ?? [])].filter(f => f));
  }
}
