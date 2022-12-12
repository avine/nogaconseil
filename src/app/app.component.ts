import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './shared/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-nav></app-nav>
    <router-outlet></router-outlet>
  `,
  imports: [RouterOutlet, NavComponent],
})
export class AppComponent {}
