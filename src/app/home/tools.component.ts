import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tools',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  template: `
    <img src="assets/reshot-icon-geometry.svg" class="icon" alt="" />

    <h3 class="h2 fg-primary">Les outils</h3>

    <ul class="list">
      <li>PEI (Programme d'Enrichissement Instrumental)</li>
      <li>Facilitation visuelle</li>
      <li>S'entraîner à être attentif</li>
      <li>Mieux apprendre avec les neurosciences</li>
      <li>Comminication bienveillante</li>
    </ul>
  `,
})
export class ToolsComponent {}
