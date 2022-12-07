import { NgIf } from '@angular/common';
import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { PageComponent } from '../page/page.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [NgIf, PageComponent],
})
export class NavComponent {
  menuOpened = false;

  @HostBinding('class.app-nav') hasClass = true;

  toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }

  navigate(id: string) {
    document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' });
    this.menuOpened = false;
  }
}
