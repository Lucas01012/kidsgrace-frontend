import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './cart.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FooterGenericComponent } from '../footer-generic/footer-generic.component';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule, FooterGenericComponent],
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit, OnDestroy {
  carrinho: any[] = [];
  total: number = 0;
  private carrinhoSubscription: Subscription | undefined;

  constructor(private cartService: CartService, private router: Router, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.carrinhoSubscription = this.cartService.carrinho$.subscribe(carrinho => {
      this.carrinho = carrinho;
      this.total = this.cartService.getTotal();
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy() {
    if (this.carrinhoSubscription) {
      this.carrinhoSubscription.unsubscribe();
    }
  }

  aumentarQuantidade(produto: any) {
    this.cartService.atualizarQuantidade(produto, produto.quantidade + 1);
  }

  diminuirQuantidade(produto: any) {
    if (produto.quantidade > 1) {
      this.cartService.atualizarQuantidade(produto, produto.quantidade - 1);
    }
  }

  removerProduto(produto: any) {
    this.cartService.removerProduto(produto);
  }

  limparCarrinho() {
    this.cartService.limparCarrinho();
  }

  trackByProduto(index: number, produto: any): number {
    return produto.id;
  }

  irParaHome() {
    this.router.navigate(['/']);
  }
}