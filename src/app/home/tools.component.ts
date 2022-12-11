import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [RouterLink],
  encapsulation: ViewEncapsulation.None,
  template: `
    <img src="assets/reshot-icon-geometry.svg" class="icon" alt="" />

    <h3 class="h2 fg-primary">Les outils</h3>

    <ul class="list">
      <li><a class="link" routerLink="/pei">PEI (Programme d'Enrichissement Instrumental)</a></li>
      <li><a class="link" routerLink="/facilitation-visuelle">Facilitation visuelle</a></li>
      <li><a class="link" routerLink="/s-entrainer-a-etre-attentif">S'entraîner à être attentif</a></li>
      <li><a class="link" routerLink="/neurosciences">Mieux apprendre avec les neurosciences</a></li>
      <li><a class="link" routerLink="/cnv">Comminication bienveillante</a></li>
    </ul>
  `,
})
export class ToolsComponent {}
