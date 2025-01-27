import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-component',
  standalone: true,
  imports: [],
  templateUrl: './order-component.component.html',
  styleUrl: './order-component.component.css'
})
export class OrderComponentComponent {
  @Input() title!: string;
  @Input() variant!: string;
}
