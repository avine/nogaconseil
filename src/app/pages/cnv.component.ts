import { Component } from '@angular/core';

@Component({
  selector: 'app-pei',
  standalone: true,
  template: `
    <section class="page page--centered" id="accueil">
      <div class="page__content">
        <h1 class="h1">Communication bienveillante</h1>

        <h2 class="h3 thin fg-primary">Objectif général</h2>

        <p class="paragraph">
          Des ateliers pour mettre en place une communication respectueuse et bienveillante avec les enfants, les
          adolescents et les adultes.
        </p>

        <p class="paragraph">
          Ce ne sont pas des recettes mais bien des pistes concrètes que proposent les neurosciences pour s'approprier
          les mécanismes de la compréhension et le fonctionnement des mémoires.
        </p>

        <h2 class="h3 thin fg-primary">Bénéfices attendus</h2>

        <ul class="list">
          <li>Améliorer l'efficacité de sa communication</li>
          <li>Développer sa capacité d'écoute et de reformulation</li>
          <li>Approfondir la connaissance de soi-même et des autres</li>
          <li>Adopter une attitude gagnant/gagnant</li>
        </ul>
      </div>
    </section>
  `,
})
export class CnvComponent {}
