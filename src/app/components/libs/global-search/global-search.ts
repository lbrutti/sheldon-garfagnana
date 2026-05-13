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

  suggestions: Signal<string[]> = computed(() => {
    return Array.from(new Set([...this.projects().flatMap((p: ProjectInterface) => {
      return [p.category, p.municipality];
    })])).sort();
  });
  filteredSuggestions: Signal<string[]> = computed(() => {
    const term = this.searchTerm().toUpperCase();
    return this.suggestions().filter(suggestion => {
      return suggestion.toUpperCase().startsWith(term)
    })
  });

  ngOnInit(): void {
    console.log(this.projects());
  }

}
