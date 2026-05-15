import {Injectable, signal, WritableSignal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataInterface, ProjectInterface} from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProjectsApiService {
  private _progetti: WritableSignal<ProjectInterface[]> = signal<ProjectInterface[]>([]);
  private _popolazione: WritableSignal<DataInterface[]> = signal<DataInterface[]>([]);

  constructor(protected readonly httpClient: HttpClient) {
  }

  getProjects() {
    this.httpClient.get('data/projects.json', {
      responseType:
        'json'
    }).subscribe((res: any) => {
      this._progetti.set(res);
    });

  }

  getPopolazione() {
    this.httpClient.get('data/popolazione.json', {
      responseType:
        'json'
    }).subscribe((res: any) => {
      this._popolazione.set(res);
    });

  }


  progetti = this._progetti.asReadonly();
  popolazione = this._popolazione.asReadonly();
}
