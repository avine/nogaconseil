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
      <li>
        <h3 class="h5" style="margin-bottom: 0.25rem">PEI (Programme d'Enrichissement Instrumental)</h3>
        <p class="paragraph thin">
          Le PEI (Programme d'Enrichissement Instrumental) du Professeur Feuerstein encourage les individus à apprendre
          comment penser (et non quoi penser). Le PEI travaille la métacognition, le fait de penser sur ses propres
          pensées.
        </p>
      </li>

      <li>
        <h3 class="h5" style="margin-bottom: 0.25rem">Facilitation visuelle</h3>
        <p class="paragraph thin">
          Découvrir une autre manière de prendre des notes, en structurant ses idées sur papier ou support numérique.
        </p>
      </li>

      <li>
        <h3 class="h5" style="margin-bottom: 0.25rem">S'entraîner à être attentif</h3>
        <p class="paragraph thin">
          Découvrir l’attention et son rôle pour nous connecter à un objet, à une tâche à réaliser ou à une personne.
          Identifier les éléments distracteurs (internes ou externes) qui empêchent d’être attentif.
        </p>
      </li>

      <li>
        <h3 class="h5" style="margin-bottom: 0.25rem">Mieux apprendre grace aux neurosciences</h3>
        <p class="paragraph thin">
          Le cerveau est à la une dans de nombreux médias. Les résultats scientifiques ne sont plus confinés dans les
          laboratoires mais deviennent visibles d’un large public et l’on s’émerveille de « voir le cerveau penser ». Ce
          ne sont pas des recettes mais bien des pistes concrètes que proposent les neurosciences pour s'approprier les
          mécanismes de la compréhension et le fonctionnement des mémoires.
        </p>
      </li>

      <li>
        <h3 class="h5" style="margin-bottom: 0.25rem">Comminication bienveillante</h3>
        <p class="paragraph thin">
          Des ateliers pour mettre en place une communication respectueuse et bienveillante avec les enfants , les
          adolescents et les adultes.
        </p>
      </li>
    </ul>
  `,
})
export class ToolsComponent {}
