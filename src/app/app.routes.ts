import { Routes } from '@angular/router';

import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { TypoComponent } from './typo/typo.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

if (!environment.production) {
  APP_ROUTES.unshift({
    path: 'typo',
    component: TypoComponent,
  });
}
