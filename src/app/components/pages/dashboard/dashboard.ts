import {Component, OnInit, signal, Signal} from '@angular/core';
import {ProjectsApiService} from '../../../services/projects-api.service';
import GlobalSearch from '../../libs/global-search/global-search';
import ProjectInterface from '../../../interfaces/project.interface';
import {FilterOptionInterface} from '../../../interfaces';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'sheldon-dashboard',
  imports: [GlobalSearch, JsonPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export default class Dashboard implements OnInit {
  protected projects: Signal<ProjectInterface[]> = signal([]);
  protected filters = signal<(string | FilterOptionInterface)[]>([]);

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
