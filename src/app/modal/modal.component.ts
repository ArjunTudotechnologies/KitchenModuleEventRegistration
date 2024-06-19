import { Component, ViewEncapsulation } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { DialogService } from '../dialog.service';
@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, DialogModule, ButtonModule, InputTextModule, CheckboxModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ModalComponent {
  visible: boolean = false;
  title = '';

  constructor(private dialogService: DialogService) {
    this.dialogService.visible$.subscribe(visible => this.visible = visible);

  }
  list = ['Pepper Jacks', 'Cheddar', 'White Cheddar'];
}
