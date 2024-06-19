import { ModalComponent } from './../modal/modal.component';
import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FoodMenuComponent } from '../food-menu/food-menu.component';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { OrderComponent } from '../order/order.component';

@Component({
  selector: 'app-stepcontent2',
  standalone: true,
  imports: [CommonModule,FoodMenuComponent,InputTextModule,CheckboxModule,OrderComponent,ModalComponent],
  templateUrl: './stepcontent2.component.html',
  styleUrl: './stepcontent2.component.css',
  encapsulation:ViewEncapsulation.None
})
export class Stepcontent2Component {
  myArray = [
    'Appetizers',
    'Legendary Wings',
    'Sandwiches',
    'Tacos',
    'Soups and Salad',
    'Burger',
    'Beverages',
  ];
  list=[
    'Veg',
    "Vegan",
    "Meat/Chicken",
    "Sea Food",
  ];

}
