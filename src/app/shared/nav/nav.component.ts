import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, inject, OnDestroy, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgIf, RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent implements OnDestroy {
  isMenuOpened = false;

  @HostBinding('class.app-nav') hasClass = true;

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
