import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterGenericComponent } from '../footer-generic/footer-generic.component';
import { CommonModule } from '@angular/common';
import { jwtDecode } from 'jwt-decode';
import { UserService } from '../services/user.service';
import { AvatarService, Pfp } from '../services/avatar.service';

interface CustomJwtPayload {
  address: string;
  roles: string[];
  telephone: string;
  id: number;
  email: string;
  sub: string;
  iat: number;
  exp: number;
}


type decodedType = {
  id?: number;
  email?: string;
  address?: string;
  name?: string;
  telephone?: string;
}


@Component({
  selector: 'app-profile-page',
  imports: [FooterGenericComponent, CommonModule],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent {
  avatars: Pfp[] = []
  decoded: decodedType = {}
  
  constructor(private router: Router, private userService: UserService, private avatarService: AvatarService) { }

  decode() {
    const token = localStorage.getItem('authToken');

    if (token) {
      this.decoded.name = jwtDecode<CustomJwtPayload>(token).sub
      this.decoded.address = jwtDecode<CustomJwtPayload>(token).address
      this.decoded.email = jwtDecode<CustomJwtPayload>(token).email
      this.decoded.telephone = jwtDecode<CustomJwtPayload>(token).telephone
      this.decoded.id = jwtDecode<CustomJwtPayload>(token).id

    }
  }

  getImagePfpId() {
    this.userService.getImagePfp(this.decoded.id).subscribe({
    next: (response) => {
      this.avatarSelecionado =  this.pfpPath + this.avatars.filter((a) =>  a.id == parseInt(response))[0].namepfp;

    },
    error: (error) => {
      console.error('Erro ao fazer requisição', error);
      // Lógica para exibir uma mensagem de erro para o usuário
    }})
  }

  ngOnInit(): void {
    this.avatars = this.avatarService.getAvatars()
    this.decode()
    this.getImagePfpId()
  }
  
  usuario = {
    nome: this.decoded.name,
    email: this.decoded.email,
    telefone: this.decoded.telephone,
    endereco: this.decoded.address
  };

  avatarSelecionado: string  = "";
  mostrarSelecaoAvatar = false;
  pfpPath: string = 'assets/avatars/'



  selecionarAvatar(id: any) {
    this.avatarSelecionado =  this.pfpPath + this.avatars.filter((a) =>  a.id == id)[0].namepfp;
    this.userService.putImagePfp(this.decoded.id, id).subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (error) => {
        console.log(error)
      }
    })
    this.mostrarSelecaoAvatar = false;
  }


  irParaHome(event: Event) {
    event.preventDefault();
    this.router.navigate(['home']);
  }
} 