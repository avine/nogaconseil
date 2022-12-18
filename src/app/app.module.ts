import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScullyLibModule } from '@scullyio/ng-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, NavComponent, ScullyLibModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
