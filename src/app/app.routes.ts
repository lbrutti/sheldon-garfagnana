import {Routes} from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/pages/dashboard/dashboard')
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./components/pages/dashboard/dashboard')
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
