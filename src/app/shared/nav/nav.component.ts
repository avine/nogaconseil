import { AsyncPipe, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-nav',
  host: { class: 'app-nav' },
  imports: [AsyncPipe, RouterLink],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  private document = inject(DOCUMENT);

  scrollY$ = inject(ScrollService).scrollY$;

  isMenuOpened = signal(false);

  constructor() {
    inject(Router)
      .events.pipe(
        takeUntilDestroyed(),
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      )
      .subscribe(() => this.isMenuOpened.set(false));
  }

  toggleMenu() {
    this.isMenuOpened.update((isMenuOpened) => !isMenuOpened);
  }

  scrollTo(fragment: string) {
    if (`#${fragment}` !== this.document.location.hash) {
      return;
    }
    // Scroll manually to the target if the current browser URL hash is already equal to the target!
    this.document.querySelector(`#${fragment}`)?.scrollIntoView({ behavior: 'smooth' });
    this.isMenuOpened.set(false);
  }
}
