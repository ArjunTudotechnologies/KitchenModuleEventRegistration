import { InputTextModule } from 'primeng/inputtext';
import { Component, ViewEncapsulation  } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { NgModule } from "@angular/core"; 
import { BrowserAnimationsModule } from  
    "@angular/platform-browser/animations"; 
@Component({
  selector: 'app-stepcontent1',
  standalone: true,
  imports: [InputTextModule,CalendarModule],
  encapsulation:ViewEncapsulation.None,
  templateUrl: './stepcontent1.component.html',
  styleUrl: './stepcontent1.component.css'
})
export class Stepcontent1Component {


}
