import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService, Product } from '../services/product.service';
import { CartService } from '../cart-page/cart.service';
import { FooterGenericComponent } from '../footer-generic/footer-generic.component';
import { CardReutComponent } from '../card-reut/card-reut.component';

@Component({
  selector: 'app-catalogo-page',
  standalone: true,
  imports: [CommonModule, FormsModule, FooterGenericComponent, CardReutComponent],
  templateUrl: './catalogo-page.component.html',
  styleUrls: ['./catalogo-page.component.scss']
})
export class CatalogoPageComponent implements OnInit {
  todosProdutos: Array<Product & { quantity: number; parcelamento: string }> = [];
  produtosFiltrados: Array<Product & { quantity: number; parcelamento: string }> = [];

  filtroTexto = '';
  filtroCategoria = '';
  filtroPreco = '';

  constructor(
    private router: Router,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.productService.products$.subscribe(list => {
      this.todosProdutos = list.map(p => ({
        ...p,
        quantity: 1,
        parcelamento: `Até 10x de R$ ${(p.price / 10).toFixed(2)} sem juros!`
      }));
      // Não exibe os produtos até o clique no botão
      this.produtosFiltrados = [];
    });
  }

  irParaHome(e: Event) {
    e.preventDefault();
    this.router.navigate(['home']);
  }

  aplicarFiltros() {
    let arr = [...this.todosProdutos];

    if (this.filtroTexto) {
      arr = arr.filter(p =>
        p.name.toLowerCase().includes(this.filtroTexto.toLowerCase())
      );
    }

    if (this.filtroCategoria) {
      arr = arr.filter(p => p.type === this.filtroCategoria);
    }

    if (this.filtroPreco === 'asc') {
      arr.sort((a, b) => a.price - b.price);
    } else if (this.filtroPreco === 'desc') {
      arr.sort((a, b) => b.price - a.price);
    }

    this.produtosFiltrados = arr;
  }

  aumentarQuantidade(produto: any) {
    produto.quantity++;
  }

  diminuirQuantidade(produto: any) {
    if (produto.quantity > 1) {
      produto.quantity--;
    }
  }

  adicionarItem(produto: any, event: MouseEvent) {
    this.cartService.adicionarProduto(produto);
    console.log('Adicionado ao carrinho:', produto, 'qtde=', produto.quantity);
  }
}