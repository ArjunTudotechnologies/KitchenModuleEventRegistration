import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-menuitem',
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule, RippleModule],
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.css'],
})
export class MenuitemComponent {
  @Input() title!: string;
  @Input() variant!: string;
  @Input() description!: string;

  constructor(private dialogService: DialogService) {}

  showDialog() {
    this.dialogService.showDialog();
  }
}
