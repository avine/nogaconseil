import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [],
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PageComponent {
  @HostBinding('class.nc-page') hasClass = true;
}
