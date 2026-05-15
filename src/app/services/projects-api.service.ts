import {Injectable, signal, WritableSignal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProjectInterface} from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProjectsApiService {
  private writableSignal: WritableSignal<ProjectInterface[]> = signal<ProjectInterface[]>([]);

  constructor(protected readonly httpClient: HttpClient) {
  }

  getProjects() {
    this.httpClient.get('data/projects.json', {
      responseType:
        'json'
    }).subscribe((res: any) => {
      this.writableSignal.set(res);
    });

  }


  projects = this.writableSignal.asReadonly();
}
