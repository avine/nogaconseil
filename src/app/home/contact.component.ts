import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  template: `
    <h3 class="h3">Me contacter</h3>

    <p class="h5 thin">
      <a href="tel:+33665209003" rel="noopener noreferrer" class="tel">06 65 20 90 03</a>
    </p>

    <p class="h5 thin">
      <a href="mailto:jharros@gmail.com" rel="noopener noreferrer" target="_blank" class="tel tel--email">
        jharros@gmail.com
      </a>
    </p>
  `,
})
export class ContactComponent {}
