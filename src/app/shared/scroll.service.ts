import { debounceTime, EMPTY, fromEvent, map } from 'rxjs';

import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  document = inject(DOCUMENT);

  scrollY$ = this.document.defaultView
    ? fromEvent(this.document.defaultView, 'scroll').pipe(
        debounceTime(250),
        map(() => this.document.defaultView?.scrollY ?? 0)
      )
    : EMPTY;
}
