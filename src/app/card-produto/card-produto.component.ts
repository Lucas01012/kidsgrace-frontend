import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Produto } from '../models/produto.model';
@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.scss']
})
export class CardProdutoComponent {
  @Input() produto!: Produto;
  @Output() adicionar = new EventEmitter<Produto>();
  @Output() aumentar = new EventEmitter<Produto>();
  @Output() diminuir = new EventEmitter<Produto>();
  
  adicionarItem(event: Event) {
    event.stopPropagation();
    this.adicionar.emit(this.produto);
  }
  
  aumentarQuantidade() {
    this.aumentar.emit(this.produto);
  }
  
  diminuirQuantidade() {
    this.diminuir.emit(this.produto);
  }
}
