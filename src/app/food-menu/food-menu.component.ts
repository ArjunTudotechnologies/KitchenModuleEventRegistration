import { Component } from '@angular/core';
import { MenuitemComponent } from '../menuitem/menuitem.component';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-food-menu',
  standalone: true,
  imports: [CommonModule, MenuitemComponent,InputTextModule],
  templateUrl: './food-menu.component.html',
  styleUrl: './food-menu.component.css',
})
export class FoodMenuComponent {
  cheeseCurds = [
    {
      title: 'Boulder Cheese Curds',
      variant: '3 Variants available',
      description:
        'Choose cheddar, white cheddar, or pepper jackcheese curds. Served with Burger Co. Sauce.',
    },

    {
      title: 'Pretzel',
      variant: '3 Variants available',
      description:
        'Choose cheddar, white cheddar, or pepper jackcheese curds. Served with Burger Co. Sauce.',
    },

    {
      title: 'Totchos',
      variant: '3 Variants available',
      description:
        'Choose cheddar, white cheddar, or pepper jackcheese curds. Served with Burger Co. Sauce.',
    },
    {
      title: 'Tavern Nachos',
      variant: '3 Variants available',
      description:
        'Choose cheddar, white cheddar, or pepper jackcheese curds. Served with Burger Co. Sauce.',
    },
    {
      title: 'Avocado Fries',
      variant: '3 Variants available',
      description:
        'Choose cheddar, white cheddar, or pepper jackcheese curds. Served with Burger Co. Sauce.',
    },
  ];
}
