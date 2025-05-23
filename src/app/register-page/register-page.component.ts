import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service'; // Importando o AuthService
import { FooterGenericComponent } from '../footer-generic/footer-generic.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-register-page',
  standalone: true,
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
  imports: [FormsModule, FooterGenericComponent, HttpClientModule, NgxMaskDirective],
  providers: [provideNgxMask()]
})
export class RegisterPageComponent {
  usuarioData = {
    name: '',
    username: '',
    email: '',
    address: '',
    telephone: '',
    password: ''
  };

  confirmarSenha = ''

  constructor(private router: Router, private authService: AuthService) {} // Injetando o AuthService

  cadastrar() {
    console.log(this.usuarioData);
    if (this.usuarioData.password === this.confirmarSenha){
        // Chama o método cadastrar do AuthService
      this.authService.cadastrar(this.usuarioData).subscribe({
        next: (res) => {
          console.log('Cadastro OK', res);
          this.irParaLogin();
        },
        error: (err) => {
          console.error('Erro ao cadastrar', err);
          // mostrar toast ou erro pro usuário
        }
      });
    }
    else{
      console.log("deu merda");
    }
  }

  irParaLogin() {
    this.router.navigate(['login']);
  }

  irParaHome() {
    this.router.navigate(['home']);
  }
}
