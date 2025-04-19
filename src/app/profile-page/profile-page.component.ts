import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterGenericComponent } from '../footer-generic/footer-generic.component';
@Component({
  selector: 'app-profile-page',
  imports: [FooterGenericComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent {
  
  usuario = {
    nome: "",
    email:"",
    telefone:"",
    endereco:""
  };

  constructor(private router: Router){}
  irParaHome(event: Event){
    event.preventDefault();
    this.router.navigate(['home']);
  }
}
