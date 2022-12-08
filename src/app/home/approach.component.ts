import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-approach',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  template: `
    <img src="assets/reshot-icon-career-choice.svg" class="icon" alt="" />

    <h3 class="h2 fg-primary">Ma démarche d'orthopédagogue</h3>

    <p class="thin">
      J'accompagne de jeunes décrocheurs pour leur redonner le plaisir d'apprendre. Bien qu'ils soient capables de
      s'organiser (pour prévoir un anniversaire-surprise), de raisonner (pour convaincre un parent de passer la soirée
      chez un copain), de mémoriser (les résultats des rencontres de foot), dès qu'il s'agit d'école ils sont
      perdus&nbsp;: ils ne retiennent plus leurs leçons ou oublient leur matériel. Je les entraîne à mettre en place un
      raisonnement métacognitif pour rendre explicites les stratégies qu'ils utilisent.
    </p>

    <p class="thin">
      J'interviens auprès des individus pour qu'ils développent leur potentiel d'apprentissage&nbsp;: il ne s'agit pas
      de viser un modèle mais de les amener à exploiter au mieux leur potentiel en s'appuyant sur leurs points forts.
    </p>

    <p class="thin">J'aide les salariés à redonner du sens et de la légèreté à leur travail.</p>

    <p class="thin">
      Et, plus que tout, je suis convaincue qu'une posture bienveillante permet d'étayer les apprentissages.
    </p>
  `,
})
export class ApproachComponent {}
