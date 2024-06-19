import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { Stepcontent1Component } from '../stepcontent1/stepcontent1.component';
import { Stepcontent2Component } from '../stepcontent2/stepcontent2.component';
import { Stepcontent3Component } from '../stepcontent3/stepcontent3.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-steps',
  standalone: true,
  imports: [ButtonModule, StepperModule,Stepcontent1Component,Stepcontent2Component,Stepcontent3Component],
  templateUrl: './steps.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./steps.component.css'],

})
export class StepsComponent {

  constructor(private router: Router) {}
  goToCreateEvent() {
    this.router.navigate(['/success']);
  }
  gobackHome() {
    this.router.navigate(['']);
  }
 }
