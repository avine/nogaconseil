import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tools',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  template: `
    <img src="assets/reshot-icon-geometry.svg" class="icon" alt="" />

    <h3 class="h2 fg-primary">Les outils</h3>

    <ul class="list">
      <li><a class="link">PEI (Programme d'Enrichissement Instrumental)</a></li>
      <li><a class="link">Facilitation visuelle</a></li>
      <li><a class="link">S'entraîner à être attentif</a></li>
      <li><a class="link">Mieux apprendre avec les neurosciences</a></li>
      <li><a class="link">Comminication bienveillante</a></li>
    </ul>
  `,
})
export class ToolsComponent {}
