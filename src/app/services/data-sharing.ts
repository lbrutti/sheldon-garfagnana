import {Injectable, signal} from '@angular/core';
import ProjectInterface from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root',
})
export class DataSharing {
  private projects = signal<ProjectInterface[]>([]); // Create a writable signal
  readonly sharedMessage = this.projects.asReadonly(); // Expose a readonly version

  updateProjects(projects: ProjectInterface[]): void {
    this.projects.set(projects); // Update the signal's value
  }
}
