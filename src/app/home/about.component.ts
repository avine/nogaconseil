import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  template: `
    <img src="assets/reshot-icon-adventure.svg" class="icon" alt="" />

    <h3 class="h2">Mon parcours</h3>

    <p class="h5 thin">Tout s’est joué il y a 20 ans.</p>

    <p class="h5 thin">
      Je pilote alors un projet de lutte contre l'illetrisme fondé sur la méthode de remédiation cognitive du Professeur
      Feuerstein, le PEI (Programme d'Enrichissement Instrumental). Je suis stupéfaite par les résultats obtenus: une
      femme de 45 ans passe enfin son permis de conduire, un père de plus de 50 ans aide, pour la première fois, ses
      enfants à faire leurs devoirs...
    </p>

    <p class="h5 thin">
      Parallèlement, je suis bousculée par les parcours scolaires des mes 4 enfants, qui remettent en question mes
      certitudes quant aux apprentissages. Je décide alors de faire le lien entre ma vie personnelle et ma vie
      professionnelle et je me forme à des outils qui font progresser les individus et les organisations.
    </p>
  `,
})
export class AboutComponent {}
