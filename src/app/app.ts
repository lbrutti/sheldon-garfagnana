import {Component, inject, signal} from '@angular/core';
import NavigationComponent from './components/libs/navigation/navigation.component';
import FullscreenLoaderComponent from './components/libs/fullscreen-loader/fullscreen-loader.component';
import {ProjectsApiService} from './services/projects-api.service';

@Component({
  selector: 'sheldon-root',
  imports: [NavigationComponent, FullscreenLoaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly apiService = inject(ProjectsApiService);
  protected readonly title = signal('sheldon-garfagnana');
  protected links: { url: string; name: string }[] = [
    {url: 'dashboard', name: 'dashboard'},
    {url: 'map', name: 'map'},
    {url: 'stories', name: 'stories'},
  ];
  protected activeLink: string = '';
}
