import { Component } from '@angular/core';

@Component({
  selector: 'app-pei',
  standalone: true,
  template: `
    <section class="page page--centered" id="accueil">
      <div class="page__content">
        <h1 class="h1">S'entraîner à être attentif</h1>

        <h2 class="h3 thin fg-primary">Objectif général</h2>
        <p class="paragraph">
          Découvrir l'attention et son rôle pour nous connecter à un objet, à une tâche à réaliser ou à une personne.
          Identifier les éléments distracteurs (internes ou externes) qui empêchent d'être attentif.
        </p>

        <h2 class="h3 thin fg-primary">Bénéfices attendus</h2>

        <ul class="list">
          <li>Comprendre le rôle des neurones dans l'attention</li>
          <li>La liberté de choisir ses actes sans dépendre de ses habitudes</li>
          <li>Une capacité à se concentrer rapidement même si le sujet ne nous intéresse pas</li>
          <li>Une attention décuplée sur les tâches à réaliser, sur ses émotions et celles des autres</li>
        </ul>

        <p class="h6 thin">
          Développer son attention, ça s'apprend! C'est un entraînement qui touche à une compétence transversale&nbsp;:
          la capacité qu'a chaque être humain de contrôler sa vie mentale, voire sa vie
        </p>

        <p class="h6 thin">
          Tous, nous sommes soumis à des sollicitations continuelles: mails, appels téléphoniques, organisation de la
          journée ou de la semaine, rendez-vous personnels et professionnels. Au travail, à la maison ou à l'école,
          prenons conscience de cette petite voix dans notre tête qui nous enjoint de plonger dans le multitâche pour
          mieux pouvoir l'inhiber.
        </p>
      </div>
    </section>
  `,
})
export class EtreAttentifComponent {}
