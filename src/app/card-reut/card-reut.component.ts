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
  @Output() adicionar = new EventEmitter<any>();

  aumentarQuantidade() {
    this.produto.quantity++;
  }

  diminuirQuantidade() {
    if (this.produto.quantity > 1) {
      this.produto.quantity--;
    }
  }

  adicionarItem() {
    this.adicionar.emit(this.produto);
  }
}
