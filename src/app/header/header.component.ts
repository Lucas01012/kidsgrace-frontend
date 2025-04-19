import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart-page/cart.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule]
})
export class HeaderComponent implements OnInit {
  quantidadeTotal: number = 0;
  quantidadeTiposProdutos = 0;

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.quantidadeTotal$.subscribe(quantidade => {
      this.quantidadeTiposProdutos = quantidade;
    });
  }

  irParaLogin() {
    this.router.navigate(['login']);
  }

  irParaCarrinhoCompra(event: Event) {
    event.preventDefault();
    this.router.navigate(['cart']);
  }
  irParaAdministracao(event: Event){
    event.preventDefault();
    this.router.navigate(['admin']);
  }
  irParaCatalogo(event: Event){
    event.preventDefault();
    this.router.navigate(['catalogo']);
  }
  irParaUser(event: Event){
    event.preventDefault();
    this.router.navigate(['user']);
  }
  irParaEquipe(event: Event){
    event.preventDefault();
    this.router.navigate(['team']);
  }
}
