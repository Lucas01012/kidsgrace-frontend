import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-reut',
  imports: [CommonModule],
  templateUrl: './card-reut.component.html',
  styleUrl: './card-reut.component.scss'
})
export class CardReutComponent {
  @Input() produto: any;
  @Output() diminuir = new EventEmitter<void>();
  @Output() aumentar = new EventEmitter<void>();
  @Output() adicionar = new EventEmitter<MouseEvent>();

  diminuirQuantidade() {
    if (this.produto.quantity > 1) {
      this.produto.quantity--;
      this.diminuir.emit();
    }
  }

  aumentarQuantidade() {
    this.produto.quantity++;
    this.aumentar.emit();
  }

  adicionarItem(event: MouseEvent) {
    this.adicionar.emit(event);
  }
}
