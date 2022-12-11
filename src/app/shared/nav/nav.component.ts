import { DOCUMENT, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, inject, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgIf],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  isMenuOpened = false;

  @HostBinding('class.app-nav') hasClass = true;

  private document = inject(DOCUMENT);

  toggleMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  }

  scrollTo(id: string) {
    this.document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' });
    this.isMenuOpened = false;
  }
}
