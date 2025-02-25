import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tools',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  template: `
    <img src="assets/reshot/reshot-icon-geometry.svg" class="icon" alt="" />

    <h3 class="h2 fg-primary">Les outils</h3>

    <ul class="list">
      <li>
        <h3 class="h5" style="margin-bottom: 0.25rem">PEI (Programme d'Enrichissement Instrumental)</h3>
        <p class="paragraph thin">
          Le PEI du Professeur Feuerstein encourage les individus à apprendre comment penser (et non quoi penser). Le
          PEI travaille la métacognition, le fait de penser sur ses propres pensées.
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
        <h3 class="h5" style="margin-bottom: 0.25rem">Mieux apprendre grâce aux neurosciences</h3>
        <p class="paragraph thin">
          Découvrir et s'approprier les mécanismes de la compréhension et le fonctionnement des mémoires. Analyser les
          méthodes d'apprentissage adaptées à chacun.
        </p>
      </li>

      <li>
        <h3 class="h5" style="margin-bottom: 0.25rem">Communication bienveillante</h3>
        <p class="paragraph thin">
          Des ateliers pour mettre en place une communication respectueuse et bienveillante avec les enfants , les
          adolescents et les adultes.
        </p>
      </li>
    </ul>
  `,
})
export class ToolsComponent {}
