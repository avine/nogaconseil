import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { NgIf } from '@angular/common';
import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [NgIf],
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PageComponent {
  @Input() centered: BooleanInput = false;

  @Input() imagePath!: string;

  @HostBinding('class.app-page') hasClass = true;

  @HostBinding('class.app-page--centered') get isCentered() {
    return coerceBooleanProperty(this.centered);
  }
}
