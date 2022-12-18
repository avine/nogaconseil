import { Component, ViewEncapsulation } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-collective-coaching',
  standalone: true,
  imports: [CardComponent],
  encapsulation: ViewEncapsulation.None,
  template: `
    <app-card class="page__content" imagePath="assets/images/people.jpg">
      <h3 class="h2">
        <div class="fg-secondary">Accompagnement</div>
        collectif
      </h3>

      <ul class="list">
        <li>Augmenter l'efficacité et le bien être des équipes</li>
        <li>Encourager la coopération et le partage des savoirs</li>
        <li>Motiver vos collaborateurs</li>
      </ul>

      <p class="h6 thin">Des formations et conférences en présence, à distance ou en blended learning.</p>
    </app-card>
  `,
})
export class CollectiveCoachingComponent {}
