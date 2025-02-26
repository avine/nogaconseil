import { Component, computed, signal, ViewEncapsulation } from '@angular/core';
import { TEXTS } from './typo.config';

@Component({
  selector: 'app-typo',
  templateUrl: './typo.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class TypoComponent {
  textIndex = signal(0);

  text = computed(() => TEXTS[this.textIndex()]);

  nextText() {
    this.textIndex.update((textIndex) => (textIndex + 1) % TEXTS.length);
  }
}
