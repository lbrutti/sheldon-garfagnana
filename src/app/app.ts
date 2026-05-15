import {Component, signal} from '@angular/core';
import Navigation from './components/libs/navigation/navigation';

@Component({
  selector: 'sheldon-root',
  imports: [

    Navigation
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
