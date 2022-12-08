import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TypoComponent } from './typo/typo.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'typo',
    component: TypoComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
