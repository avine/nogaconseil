import { Component, ViewEncapsulation } from '@angular/core';
import { CardComponent } from '../shared/layout/card/card.component';
import { NavComponent } from '../shared/layout/nav/nav.component';
import { PageComponent } from '../shared/layout/page/page.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [PageComponent, CardComponent, NavComponent],
})
export class HomeComponent {}
