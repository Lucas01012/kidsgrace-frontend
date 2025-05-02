import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterGenericComponent } from '../footer-generic/footer-generic.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-profile-page',
  imports: [FooterGenericComponent, CommonModule],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent {
  usuario = {
    nome: "",
    email: "",
    telefone: "",
    endereco: ""
  };

  avatarSelecionado: string = '';
  mostrarSelecaoAvatar = false;

  avatars: string[] = [
    'assets/avatars/darth-ava.webp',
    'assets/avatars/gokudes-ava.webp',
    'assets/avatars/gokuv-ava.webp',
    'assets/avatars/golum-ava.webp',
    'assets/avatars/guts-ava.webp',
    'assets/avatars/ken-ava.webp',
    'assets/avatars/kuririn-ava.webp',
    'assets/avatars/naruto-ava.webp',
    'assets/avatars/sauron-ava.webp',
    'assets/avatars/scorpion-ava.webp',
    'assets/avatars/shrekdes-ava.webp',
    'assets/avatars/shrekmal-ava.webp',
    'assets/avatars/spidercam-ava.webp',
    'assets/avatars/spiderman-ava.webp',
    'assets/avatars/yasuo-ava.webp',
    'assets/avatars/yoda-ava.webp'
  ];
  selecionarAvatar(avatar: string) {
    this.avatarSelecionado = avatar;
    this.mostrarSelecaoAvatar = false;
  }

  constructor(private router: Router) { }

  irParaHome(event: Event) {
    event.preventDefault();
    this.router.navigate(['home']);
  }
}