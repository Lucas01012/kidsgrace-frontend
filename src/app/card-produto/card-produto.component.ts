import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../services/product.service';
@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class CardProdutoComponent {
  @Input() produto!: Product;
  @Output() adicionar = new EventEmitter<Product>();
  @Output() aumentar = new EventEmitter<Product>();
  @Output() diminuir = new EventEmitter<Product>();

  
  diminuirQuantidade() {
    this.diminuir.emit(this.produto);
  }

  aumentarQuantidade() {
    this.aumentar.emit(this.produto);
  }

  adicionarItem() {
    this.adicionar.emit(this.produto);
  }
}
