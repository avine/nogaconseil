import { Component } from '@angular/core';

@Component({
  selector: 'app-pei',
  standalone: true,
  template: `
    <section class="page page--centered" id="accueil">
      <div class="page__content">
        <h1 class="h1">Programme d'Enrichissement Instrumental</h1>

        <h2 class="h2 fg-primary">Objectif général</h2>

        <p class="paragraph">
          Le PEI (Programme d'Enrichissement Instrumental) du Professeur Feuerstein encourage les individus à apprendre
          comment penser (et non quoi penser). Le PEI travaille la métacognition, le fait de penser sur ses propres
          pensées.
        </p>

        <h2 class="h2 fg-primary">Bénéfices attendus</h2>

        <ul class="list">
          <li>Comprendre la métacognition</li>
          <li>Identifier les fonctions cognitives à améliorer</li>
          <li>Rendre ses fonctions cognitives plus efficientes</li>
          <li>Développer son intelligence émotionnelle</li>
          <li>Apprendre à apprendre</li>
        </ul>
      </div>
    </section>
  `,
})
export class PeiComponent {}
