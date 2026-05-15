import {Component, signal} from '@angular/core';
import NavigationComponent from './components/libs/navigation/navigation.component';

@Component({
  selector: 'sheldon-root',
  imports: [

    NavigationComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('sheldon-garfagnana');
  protected links: { url: string; name: string }[] = [
    {url: 'dashboard', name: 'dashboard'},
    {url: 'stories', name: 'stories'},
    {url: 'map', name: 'map'}
  ];
  protected activeLink: string ='';
}
