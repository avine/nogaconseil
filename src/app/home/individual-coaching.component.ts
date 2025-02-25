import { Component, ViewEncapsulation } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-individual-coaching',
  imports: [CardComponent],
  encapsulation: ViewEncapsulation.None,
  template: `
    <app-card class="page__content" imagePath="assets/images/pexels-thirdman.jpg">
      <h3 class="h2">
        <div class="fg-secondary">Accompagnement</div>
        individuel
      </h3>

      <ul class="list">
        <li>Mieux gérer son temps</li>
        <li>Apprendre plus facilement et mémoriser plus longtemps</li>
        <li>(Re)trouver le plaisir d'apprendre</li>
      </ul>

      <p class="h6 thin">
        Un accompagnement pour (re)trouver la confiance en soi et progresser en présence ou à distance.
      </p>
    </app-card>
  `,
})
export class IndividualCoachingComponent {}
