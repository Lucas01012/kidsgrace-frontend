import { Component, OnInit, ChangeDetectorRef, Input, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart-page/cart.service';
import { Subscription } from 'rxjs';
import { Product, ProductService } from '../services/product.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {
  animatingItem: any = null;
  produtos: (Product & { quantidade: number; parcelamento: string })[] = [];

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.products$.subscribe(list => {
      this.produtos = list.map(p => ({
        ...p,
        quantidade: 1,
        parcelamento: `Até 10x de R$ ${(Number(p.price) / 10).toFixed(2)} sem juros!`
      }));
    });
  }

  adicionarItem(produto: any, event: MouseEvent) {
    const target = event.target as HTMLElement;
    const rect = target.getBoundingClientRect();

    this.animatingItem = {
      imagem: produto.imageUrl,
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX
    };

    setTimeout(() => {
      const cartIcon = document.querySelector(".bi-cart") as HTMLElement;
      if (!cartIcon) return;

      const cartRect = cartIcon.getBoundingClientRect();

      this.animatingItem.top = cartRect.top + window.scrollY + 10;
      this.animatingItem.left = cartRect.left + window.scrollX + 10;
    }, 50);

    setTimeout(() => {
      this.animatingItem = null;
      const produtoFormatado = this.formatarProdutoParaCarrinho(produto);
      this.cartService.adicionarProduto(produtoFormatado);
    }, 800);
  }

  private formatarProdutoParaCarrinho(produto: Product): any {
    return {
      id: produto.id,
      nome: produto.name,
      preco: produto.price,
      parcelamento: `Até 10x de R$ ${(Number(produto.price) / 10).toFixed(2)} sem juros!`,
      imagem: produto.imageUrl,
      quantidade: produto.quantity
    };
  }

  aumentarQuantidade(produto: any) {
    produto.quantidade++;
  }

  diminuirQuantidade(produto: any) {
    if (produto.quantidade > 1) {
      produto.quantidade--;
    }
  }
}
