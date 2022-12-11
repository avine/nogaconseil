import { Component } from '@angular/core';

@Component({
  selector: 'app-pei',
  standalone: true,

  template: `
    <section class="page page--centered" id="accueil">
      <div class="page__content">
        <h1 class="h1">Facilitation visuelle</h1>

        <h2 class="h2 fg-primary">Objectif général</h2>

        <p class="paragraph">
          Découvrir une autre manière de prendre des notes, en structurant ses idées sur papier ou support numérique.
        </p>

        <h2 class="h2 fg-primary">Bénéfices attendus</h2>

        <p class="paragraph">
          Les techniques de prise de notes visuelles permettent de dégager l'essentiel et de représenter rapidement des
          concepts abstraits et complexes. Elles encouragent une approche plus personnelle qu'une prise de notes
          purement textuelle, font appel aux émotions et facilitent la compréhension et la mémorisation.
        </p>
      </div>
    </section>
  `,
})
export class FacilitationVisuelleComponent {}
