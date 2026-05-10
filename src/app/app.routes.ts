import {Routes} from '@angular/router';
import Dashboard from './components/pages/dashboard/dashboard';


export const routes: Routes = [
  {
    path: '',
    component: Dashboard
  },
  {
    path: 'dashboard',
    component: Dashboard
  },
  {
    path: 'stories',
    loadComponent: () => import('./components/pages/data-stories/data-stories')
  },
  {
    path: 'stories/:id',
    loadComponent: () => import('./components/pages/data-story/data-story')
  },
  {
    path: 'map',
    loadComponent: () => import('./components/pages/map-view/map-view')
  },
];
