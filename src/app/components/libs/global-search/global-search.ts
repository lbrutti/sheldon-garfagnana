import {Component, computed, input, signal, Signal} from '@angular/core';
import ProjectInterface from '../../../interfaces/project.interface';
import {MatFormField, MatInputModule, MatLabel} from '@angular/material/input';
import {MatOption} from '@angular/material/select';
import {MatAutocomplete, MatAutocompleteTrigger} from '@angular/material/autocomplete';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {toSignal} from '@angular/core/rxjs-interop';
import {MatButton} from '@angular/material/button';
import {MatChip, MatChipSet} from '@angular/material/chips';
import {MatButtonToggle, MatButtonToggleChange, MatButtonToggleGroup} from '@angular/material/button-toggle';

interface AutocompleteOption {
  value: string;
  key: string;
}

@Component({
  selector: 'sheldon-global-search',
  imports: [
    MatInputModule,
    MatFormField,
    MatLabel,
    MatOption,
    MatAutocomplete,
    MatAutocompleteTrigger,
    FormsModule,
    ReactiveFormsModule,
    MatButtonToggle,
    MatButtonToggleGroup,
  ],
  templateUrl: './global-search.html',
  styleUrl: './global-search.scss',
})

export default class GlobalSearch {
  textBox = new FormControl<string | AutocompleteOption>({key: '', value: ''});
  textBoxSignal = toSignal(this.textBox.valueChanges);

  chipSet = new FormControl<AutocompleteOption[]>([]);
  chipSetSignal = toSignal(this.chipSet.valueChanges);


  projects = input<ProjectInterface[]>([]);

  suggestions: Signal<AutocompleteOption[]> = computed(() => {
    let municipalitySuggestions: { [key: string]: AutocompleteOption } = {};
    let categorySuggestions: { [key: string]: AutocompleteOption } = {};
    this.projects().map((p: ProjectInterface) => {
      if (!municipalitySuggestions[`${p.municipality.toUpperCase()}}`]) {
        municipalitySuggestions[`${p.municipality.toUpperCase()}`] = {
          value: p.municipality,
          key: 'municipality'
        };
      }

      if (!categorySuggestions[`${p.category.toUpperCase()}}`]) {
        categorySuggestions[`${p.category.toUpperCase()}`] = {
          value: p.category,
          key: 'category'
        };
      }
    });
    return [...Object.values(categorySuggestions), ...Object.values(municipalitySuggestions)].sort((a, b) => a.value.localeCompare(b.value));
  });

  chips: Signal<AutocompleteOption[]> = computed(() => {
    let categorySuggestions: { [key: string]: AutocompleteOption } = {};
    this.projects().map((p: ProjectInterface) => {
      if (!categorySuggestions[`${p.category.toUpperCase()}}`]) {
        categorySuggestions[`${p.category.toUpperCase()}`] = {
          value: p.category,
          key: 'category'
        };
      }
    });
    return Object.values(categorySuggestions).sort((a, b) => a.value.localeCompare(b.value));

  });

  filteredSuggestions: Signal<AutocompleteOption[]> = computed(() => {
    let term: string = '';
    if (typeof this.textBoxSignal() === 'string') {
      term = (this.textBoxSignal() as string);
    } else {
      term = (this.textBoxSignal() as AutocompleteOption)?.value;
    }

    return term ? this.suggestions().filter(suggestion => {
      return suggestion.value.toUpperCase().startsWith(term.toUpperCase())
    }) : this.suggestions();
  });

  displayFn(tokenName: { key: string, value: string }): string {
    return tokenName?.value ?? '';
  }

  protected applyFilter($event: any) {
    console.log([this.textBoxSignal(), ...this.chipSetSignal()].filter(f => f));
  }


}
