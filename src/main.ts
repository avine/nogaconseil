import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(APP_ROUTES, withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }))],
}).catch((err) => console.error(err));
