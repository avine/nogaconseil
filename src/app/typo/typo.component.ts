import { Component, ViewEncapsulation } from '@angular/core';
import { TEXTS } from './typo.config';

@Component({
  selector: 'app-typo',
  standalone: true,
  templateUrl: './typo.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class TypoComponent {
  get text() {
    return TEXTS[this.textIndex];
  }

  textIndex = 0;

  nextText() {
    this.textIndex = (this.textIndex + 1) % TEXTS.length;
  }
}
