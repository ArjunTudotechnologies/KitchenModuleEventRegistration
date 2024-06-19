import { Component } from '@angular/core';
import { OrderComponentComponent } from '../order-component/order-component.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, OrderComponentComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent {
  cheeseCurds = [
    {
      title: 'Boulder Cheese Curds',
      variant: 'Pepper Jack',
    },

    {
      title: 'Pretzel',
      variant: 'Cheddar',
    },

    {
      title: 'Totchos',
      variant: 'Small',
    },
  ];
}
