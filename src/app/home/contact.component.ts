import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  template: `
    <img src="assets/reshot-icon-mentoring.svg" class="icon" alt="" />

    <h3 class="h2">
      <div class=" fg-secondary">Me contacter</div>
      Janie Harros
    </h3>

    <p class="h3 thin">
      <a href="tel:+33665209003" rel="noopener noreferrer" class="big-icon big-icon--tel">06 65 20 90 03</a>
    </p>

    <p class="h3 thin">
      <a href="mailto:jharros@gmail.com" rel="noopener noreferrer" target="_blank" class="big-icon big-icon--email">
        jharros@gmail.com
      </a>
    </p>
  `,
})
export class ContactComponent {}
