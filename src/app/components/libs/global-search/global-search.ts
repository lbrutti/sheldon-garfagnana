import {Component, computed, input, OnInit, signal, Signal} from '@angular/core';
import ProjectInterface from '../../../interfaces/project.interface';
import {JsonPipe} from '@angular/common';
import {MatFormField, MatInputModule, MatLabel} from '@angular/material/input';
import {MatOption, MatSelect} from '@angular/material/select';
import {MatAutocomplete, MatAutocompleteTrigger} from '@angular/material/autocomplete';
import {FormsModule} from '@angular/forms';

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
  ],
  templateUrl: './global-search.html',
  styleUrl: './global-search.scss',
})
export default class GlobalSearch implements OnInit {
  projects = input<ProjectInterface[]>([]);
  searchTerm: Signal<string> = signal<string>('');

  suggestions: Signal<{ value: string, key: string }[]> = computed(() => {
    let municipalitySuggestions: { [key: string]: { value: string, key: string } } = {};
    let categorySuggestions: { [key: string]: { value: string, key: string } } = {};
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
  filteredSuggestions: Signal<{ value: string, key: string }[]> = computed(() => {
    const term = this.searchTerm().toUpperCase();
    return this.suggestions().filter(suggestion => {
      return suggestion.value.toUpperCase().startsWith(term)
    })
  });

  ngOnInit(): void {
    console.log(this.projects());
  }

}
