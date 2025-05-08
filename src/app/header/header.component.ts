import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart-page/cart.service';
import { CommonModule } from '@angular/common';
import { jwtDecode } from 'jwt-decode'
import { AvatarService, Pfp } from '../services/avatar.service';
import { UserService } from '../services/user.service';
import { Console } from 'console';
import { FormsModule } from '@angular/forms';
import { BuscaService } from '../services/busca.service';
export interface CustomJwtPayload {
  address: string;
  roles: string[];
  telephone: string;
  id: number;
  email: string;
  sub: string;
  iat: number;
  exp: number;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class HeaderComponent implements OnInit {
  avatars: Pfp[] = []
  token!: CustomJwtPayload;
  avatarSelecionado: string  = "";
  pfpPath: string = 'assets/avatars/';
  termoBusca = '';
  
  quantidadeTotal: number = 0;
  quantidadeTiposProdutos = 0;


  isLogin =  localStorage.getItem("authToken") ? true : false;
  
  constructor(private router: Router, private cartService: CartService, private avatarService: AvatarService, private userService: UserService, private buscaService: BuscaService) {}


  isAdmin(): boolean {
    const token = localStorage.getItem('authToken');
    if (!token) return false;
  
    try {
      const decoded = jwtDecode<CustomJwtPayload>(token);

      this.token = decoded
      return decoded.roles?.includes("ROLE_ADMIN") || false;
    } catch (error) {
      console.error('Erro ao decodificar o token:', error);
      return false;
    }
  }

  buscar() {
    if (this.termoBusca.trim()) {
      this.buscaService.atualizarTermoBusca(this.termoBusca.trim());
      this.router.navigate(['/catalogo']);
    }
  }
  getImagePfpId() {
    this.isAdmin()

    this.userService.getImagePfp(this.token.id).subscribe({
    next: (response) => {
      this.avatarSelecionado =  this.pfpPath + this.avatars.filter((a) =>  a.id == parseInt(response))[0].namepfp;
      console.log(this.avatarSelecionado)
    },
    error: (error) => {
      console.error('Erro ao fazer requisição', error);
    }})
  }

  ngOnInit(): void {
    this.avatars = this.avatarService.getAvatars()

    this.getImagePfpId()

    this.cartService.quantidadeTotal$.subscribe(quantidade => {
      this.quantidadeTiposProdutos = quantidade;
    });
  }

  logout(){
    localStorage.clear()
    this.irParaLogin()
    this.cartService.resetCarrinho();
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