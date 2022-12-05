import { Component } from '@angular/core';
import { PageComponent } from '../shared/layout/page/page.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PageComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
