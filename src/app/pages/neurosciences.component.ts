import { Component } from '@angular/core';

@Component({
  selector: 'app-pei',
  standalone: true,
  template: `
    <section class="page page--centered" id="accueil">
      <div class="page__content">
        <h1 class="h1">Mieux apprendre grace aux neurosciences</h1>

        <h2 class="h3 thin fg-primary">Objectif général</h2>

        <p class="paragraph">
          Le cerveau est à la une dans de nombreux médias. Les résultats scientifiques ne sont plus confinés dans les
          laboratoires mais deviennent visibles d'un large public et l'on s'émerveille de «&nbsp;voir le cerveau
          penser&nbsp;».
        </p>

        <p class="paragraph">
          Ce ne sont pas des recettes mais bien des pistes concrètes que proposent les neurosciences pour s'approprier
          les mécanismes de la compréhension et le fonctionnement des mémoires.
        </p>

        <h2 class="h3 thin fg-primary">Bénéfices attendus</h2>

        <ul class="list">
          <li>Favoriser le développement de l'attention et de la mémoire</li>
          <li>Pratiquer l'empathie pour mieux communiquer</li>
          <li>En finir avec les neuromythes et les fausses croyances</li>
          <li>Proposer des pratiques et des outils immédiatement utilisables</li>
        </ul>
      </div>
    </section>
  `,
})
export class NeurosciencesComponent {}
