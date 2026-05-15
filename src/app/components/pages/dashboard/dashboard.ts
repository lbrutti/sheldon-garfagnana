import {Component, computed, OnInit, signal, Signal} from '@angular/core';
import {ProjectsApiService} from '../../../services/projects-api.service';
import GlobalSearchComponent from '../../libs/global-search/global-search.component';
import {FilterOptionInterface, ProjectInterface} from '../../../interfaces';
import ProjectsByKeyCardComponent from '../../libs/projects-by-key-card/projects-by-key-card.component';

@Component({
  selector: 'sheldon-dashboard',
  imports: [GlobalSearchComponent,  ProjectsByKeyCardComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export default class Dashboard implements OnInit {
  protected projects: Signal<ProjectInterface[]> = signal([]);
  protected filters = signal<(string | FilterOptionInterface)[]>([]);
  filteredProjects = computed(() => {
    return this.projects().filter((project: ProjectInterface) => {
      return this.filters().length === 0 || this.filters().every((f: string | FilterOptionInterface) => {
        return (project as any)[(f as FilterOptionInterface).key] === (f as FilterOptionInterface).value;

      })
    });
  });

  constructor(protected apiService: ProjectsApiService) {
  }

  ngOnInit(): void {
    this.apiService.getProjects();
    this.projects = this.apiService.projects;
  }

  protected applyFilters($event: (string | FilterOptionInterface)[]) {
    this.filters.set($event);
  }
}
