import {Component, computed, input, signal, Signal} from '@angular/core';
import ProjectInterface from '../../../interfaces/project.interface';
import {MatFormField, MatInputModule, MatLabel} from '@angular/material/input';
import {MatOption} from '@angular/material/select';
import {MatAutocomplete, MatAutocompleteTrigger} from '@angular/material/autocomplete';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {toSignal} from '@angular/core/rxjs-interop';

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
  ],
  templateUrl: './global-search.html',
  styleUrl: './global-search.scss',
})

export default class GlobalSearch {
  myControl = new FormControl<string | AutocompleteOption>({key: '', value: ''});
  myControlSignal = toSignal(this.myControl.valueChanges);

  projects = input<ProjectInterface[]>([]);
  searchTerm: Signal<string> = signal<string>('');

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

  filteredSuggestions: Signal<AutocompleteOption[]> = computed(() => {
    let term: string = '';
    if (typeof this.myControlSignal() === 'string') {
      term = (this.myControlSignal() as string);
    } else {
      term = (this.myControlSignal() as AutocompleteOption)?.value;
    }

    return term ? this.suggestions().filter(suggestion => {
      return suggestion.value.toUpperCase().startsWith(term.toUpperCase())
    }) : this.suggestions();
  });

  displayFn(tokenName: { key: string, value: string }): string {
    return tokenName?.value ?? '';
  }

  protected applyFilter($event: any) {
    console.log(this.searchTerm());
    console.log($event);
  }

  protected applyFilterSelection($event: any) {
    console.log(this.searchTerm());
    console.log($event);
  }
}
