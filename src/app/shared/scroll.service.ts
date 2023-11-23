import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { debounceTime, EMPTY, fromEvent, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  document = inject(DOCUMENT);

  scrollY$ = this.document.defaultView
    ? fromEvent(this.document.defaultView, 'scroll').pipe(
        debounceTime(200),
        map(() => {
          const { scrollTop, scrollHeight } = this.document.documentElement;
          const windowHeight = this.document.defaultView?.innerHeight ?? 0;
          const nearTop = scrollTop < windowHeight * 0.8;
          const nearBottom = scrollHeight - (scrollTop + windowHeight) < windowHeight * 0.8;
          return {
            nearTop,
            inBetween: !nearTop && !nearBottom,
            nearBottom,
          };
        }),
      )
    : EMPTY;
}
