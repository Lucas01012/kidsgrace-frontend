import { Component, ChangeDetectorRef, Input, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart-page/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent {
  animatingItem: any = null;
  produtos = [
    {
      id: 1,
      nome: "GOKU - DRAGON BALL - PANTASY",
      preco: "R$ 99,00",
      parcelamento: "Até 10x de R$ 9,90 sem juros!",
      imagem: "assets/images/goku-min.webp",
      quantidade: 1
    },
    {
      id: 2,
      nome: "MINI GEMINI - SAINT SEIYA",
      preco: "R$ 129,00",
      parcelamento: "Até 10x de R$ 12,90 sem juros!",
      imagem: "assets/images/mini_gemini-min.webp",
      quantidade: 1
    },
    {
      id: 3,
      nome: "LEGOLAS - SENHOR DOS ANÉIS",
      preco: "R$ 199,00",
      parcelamento: "Até 10x de R$ 19,90 sem juros!",
      imagem: "assets/images/legolas-min.webp",
      quantidade: 1
    },
    {
      id: 4,
      nome: "SCORPION - MORTAL KOMBAT",
      preco: "R$ 249,00",
      parcelamento: "Até 10x de R$ 24,90 sem juros!",
      imagem: "assets/images/scorpion_minico.webp",
      quantidade: 1
    },
    {
      id: 5,
      nome: "SHREK - MCFARLANE",
      preco: "R$ 559,00",
      parcelamento: "Até 10x de R$ 55,90 sem juros!",
      imagem: "assets/images/shrek-min.webp",
      quantidade: 1
    },
    {
      id: 6,
      nome: "PEQUENO PRINCIPE",
      preco: "R$ 99,00",
      parcelamento: "Até 10x de R$ 9,90 sem juros!",
      imagem: "assets/images/little_prince-min.webp",
      quantidade: 1
    },
    {
      id: 7,
      nome: "GUILE - STREET FIGHTER",
      preco: "R$ 699,00",
      parcelamento: "Até 10x de R$ 69,90 sem juros!",
      imagem: "assets/images/guile.min.webp",
      quantidade: 1
    },
    {
      id: 8,
      nome: "ROBOCOP",
      preco: "R$ 799,00",
      parcelamento: "Até 10x de R$ 79,90 sem juros!",
      imagem: "assets/images/robocop-min.webp",
      quantidade: 1
    },
    {
      id: 9,
      nome: "GIMLI - SENHOR DOS ANÉIS",
      preco: "R$ 199,00",
      parcelamento: "Até 10x de R$ 19,90 sem juros!",
      imagem: "assets/images/gimli-min.webp",
      quantidade: 1
    },
    {
      id: 10,
      nome: "MILES MORALES - PREMIUM",
      preco: "R$ 4999,00",
      parcelamento: "Até 10x de R$ 499,90 sem juros!",
      imagem: "assets/images/miles_morales-min.webp",
      quantidade: 1
    },
    {
      id: 11,
      nome: "BRO THOR - INFINITY SAGA",
      preco: "R$ 249,00",
      parcelamento: "Até 10x de R$ 24,90 sem juros!",
      imagem: "assets/images/thor-min.webp",
      quantidade: 1
    },
    {
      id: 12,
      nome: "DILOPHOSAURUS - JURASSIC PARK",
      preco: "R$ 199,00",
      parcelamento: "Até 10x de R$ 19,90 sem juros!",
      imagem: "assets/images/dinossauro-min.webp",
      quantidade: 1
    },
    
  ];

  constructor(private cartService: CartService) { }

  adicionarItem(produto: any, event: MouseEvent) {
    const target = event.target as HTMLElement;
    const rect = target.getBoundingClientRect();
  
    this.animatingItem = {
      imagem: produto.imagem,
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
      this.cartService.adicionarProduto(produto);
    }, 800);
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
