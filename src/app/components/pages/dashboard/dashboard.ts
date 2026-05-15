import {Component, computed, OnInit, signal, Signal} from '@angular/core';
import {ProjectsApiService} from '../../../services/projects-api.service';
import GlobalSearchComponent from '../../libs/global-search/global-search.component';
import {DataInterface, FilterOptionInterface, ProjectInterface} from '../../../interfaces';
import ChartHorizontalBarComponent from '../../libs/chart-horizontal-bar/chart-horizontal-bar.component';
import {components} from '../../libs';

@Component({
  selector: 'sheldon-dashboard',
  imports: [GlobalSearchComponent, ChartHorizontalBarComponent, components],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export default class Dashboard implements OnInit {
  protected projects: Signal<ProjectInterface[]> = signal([]);
  protected popolazione: Signal<DataInterface[]> = signal([]);
  protected filters = signal<(string | FilterOptionInterface)[]>([]);
  filteredProjects = computed(() => {
    return this.projects().filter((project: ProjectInterface) => {
      return this.filters().length === 0 || this.filters().every((f: string | FilterOptionInterface) => {
        return (project as any)[(f as FilterOptionInterface).key] === (f as FilterOptionInterface).value;
      })
    });
  });
  popolazioneLastYear = computed(() => {
    const lastYear = Math.max(...this.popolazione().map(p => p.anno));
    return this.popolazione().filter(d => d.anno === lastYear);
  });

  constructor(protected apiService: ProjectsApiService) {
  }

  ngOnInit(): void {
    this.apiService.getProjects();
    this.apiService.getPopolazione();
    this.projects = this.apiService.progetti;
    this.popolazione = this.apiService.popolazione;
  }

  protected applyFilters($event: (string | FilterOptionInterface)[]) {
    this.filters.set($event);
  }
}
