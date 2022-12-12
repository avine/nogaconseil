import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  template: `
    <h1 class="h5 thin">
      <img src="assets/reshot-icon-biology.svg" class="icon" alt="" style="margin-right: 0.5rem;" />
      Noga Conseil
    </h1>

    <h2 class="h1">
      <div class="fg-secondary" style="margin-bottom: 0.75rem">Apprenez plus facilement</div>
      Mémorisez plus longtemps
    </h2>
  `,
})
export class LandingComponent {}
