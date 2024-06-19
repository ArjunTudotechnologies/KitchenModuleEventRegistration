import { Component } from '@angular/core';
import { OrdersummaryComponent } from '../ordersummary/ordersummary.component';
import { OrderComponent } from '../order/order.component';

@Component({
  selector: 'app-stepcontent3',
  standalone: true,
  imports: [OrdersummaryComponent,OrderComponent],
  templateUrl: './stepcontent3.component.html',
  styleUrl: './stepcontent3.component.css'
})
export class Stepcontent3Component {

}
