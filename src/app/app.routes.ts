import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CnvComponent } from './pages/cnv.component';
import { EtreAttentifComponent } from './pages/etre-attentif.component';
import { FacilitationVisuelleComponent } from './pages/facilitation-visuelle.component';
import { NeurosciencesComponent } from './pages/neurosciences.component';
import { PeiComponent } from './pages/pei.component';
import { TypoComponent } from './typo/typo.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'pei',
    component: PeiComponent,
  },
  {
    path: 'facilitation-visuelle',
    component: FacilitationVisuelleComponent,
  },
  {
    path: 's-entrainer-a-etre-attentif',
    component: EtreAttentifComponent,
  },
  {
    path: 'neurosciences',
    component: NeurosciencesComponent,
  },
  {
    path: 'cnv',
    component: CnvComponent,
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
