import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, ViewEncapsulation, inject } from '@angular/core';
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
export class NavComponent implements OnDestroy {
  scrollY$ = inject(ScrollService).scrollY$;

  isMenuOpened = false;

  private subscription = inject(Router)
    .events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
    .subscribe(() => (this.isMenuOpened = false));

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  toggleMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  }
}
