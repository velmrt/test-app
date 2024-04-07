import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./feature-map/map/map.component').then(c => c.MapComponent)
  }
];
