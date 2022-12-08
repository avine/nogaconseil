import { Component, ViewEncapsulation } from '@angular/core';
import { NavComponent } from '../shared/nav/nav.component';
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
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    NavComponent,
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
