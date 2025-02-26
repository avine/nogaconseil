import { Component, ViewEncapsulation } from '@angular/core';
import { AboutComponent } from './about.component';
import { ApproachComponent } from './approach.component';
import { CollectiveCoachingComponent } from './collective-coaching.component';
import { ContactComponent } from './contact.component';
import { IndividualCoachingComponent } from './individual-coaching.component';
import { LandingComponent } from './landing.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ToolsComponent } from './tools.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
  imports: [
    AboutComponent,
    ApproachComponent,
    CollectiveCoachingComponent,
    IndividualCoachingComponent,
    ReviewsComponent,
    ContactComponent,
    LandingComponent,
    ToolsComponent,
  ],
})
export class HomeComponent {}
