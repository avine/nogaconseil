import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  template: `
    <h1 class="h5 thin">Noga Conseil</h1>

    <h2 class="h1">
      <div class="fg-secondary">Apprenez plus facilement</div>
      Mémorisez plus longtemps
    </h2>
  `,
})
export class LandingComponent {}
