import {Component, OnInit, signal, Signal} from '@angular/core';
import {ProjectsApiService} from '../../../services/projects-api.service';
import GlobalSearch from '../../libs/global-search/global-search';
import ProjectInterface from '../../../interfaces/project.interface';

@Component({
  selector: 'sheldon-dashboard',
  imports: [GlobalSearch],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export default class Dashboard implements OnInit {
  protected projects: Signal<ProjectInterface[]> = signal([]);
  constructor(protected apiService: ProjectsApiService) {
  }

  ngOnInit(): void {
    this.apiService.getProjects();
    this.projects = this.apiService.projects;

  }
}
