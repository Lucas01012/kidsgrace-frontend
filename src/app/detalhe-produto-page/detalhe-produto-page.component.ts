import { Component, OnInit, ChangeDetectorRef, Input, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService, Product } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { FooterGenericComponent } from '../footer-generic/footer-generic.component';
import  { HeaderComponent } from '../header/header.component'
import { CartService } from '../cart-page/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-produto-page',
  imports: [FooterGenericComponent, CommonModule, HeaderComponent],
  templateUrl: './detalhe-produto-page.component.html',
  styleUrl: './detalhe-produto-page.component.scss'
})
export class DetalheProdutoPageComponent implements OnInit {
  produto?: Product;
  animatingItem: any = null;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private cdr: ChangeDetectorRef,
    private router: Router,
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.produto = this.productService.getProductById(id);
  }

  adicionarItem(produto: any, event: MouseEvent) {
    const target = event.target as HTMLElement;
    const rect = target.getBoundingClientRect();

    this.animatingItem = {
      imagem: produto.imageUrl,
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX
    };

    // Função de movimento da lupa
    const mouseMove = (event: MouseEvent) => {
      const lupa = document.querySelector('.produto-imagem-lupa') as HTMLElement;
      const img = document.querySelector('.produto-imagem') as HTMLElement;
      
      if (lupa && img) {
        // Calculando as posições de acordo com o mouse
        const rect = img.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        // Calculando o centro da lupa e posicionando-a
        const lupaX = mouseX - lupa.offsetWidth / 2;
        const lupaY = mouseY - lupa.offsetHeight / 2;

        // Limitar a posição da lupa dentro dos limites da imagem
        const maxX = img.offsetWidth - lupa.offsetWidth;
        const maxY = img.offsetHeight - lupa.offsetHeight;

        lupa.style.left = `${Math.min(Math.max(0, lupaX), maxX)}px`;
        lupa.style.top = `${Math.min(Math.max(0, lupaY), maxY)}px`;

        // Ajustar o background da lupa para mostrar a parte ampliada
        lupa.style.backgroundPosition = `-${lupaX}px -${lupaY}px`;
      }
    };

    document.addEventListener('mousemove', mouseMove);

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
      console.log(produtoFormatado);
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
    produto.quantity++;
  }

  diminuirQuantidade(produto: any) {
    if (produto.quantity > 1) {
      produto.quantity--;
    }
  }
}