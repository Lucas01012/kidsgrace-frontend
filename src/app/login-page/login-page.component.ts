import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service'; // Importando o AuthService
import { HttpClientModule } from '@angular/common/http';
import { FooterGenericComponent } from '../footer-generic/footer-generic.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule, FooterGenericComponent],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  usuarioData = {
    username: '',
    password: ''
  };

  constructor(private router: Router, private authService: AuthService) {} // Injetando o AuthService

  login() {
    console.log(this.usuarioData);

    // Aqui você deve chamar o método de login, e não o de cadastro
    this.authService.login(this.usuarioData).subscribe(
      (response) => {
        console.log('Login realizado com sucesso!', response);
        // Redireciona para a página inicial após o login
        this.irParaHome();
      },
      (error) => {
        console.error('Erro ao fazer login', error);
        // Lógica para exibir uma mensagem de erro para o usuário
      }
    );
  }

  cadastrar() {
    this.router.navigate(['register']);
  }

  irParaHome() {
    this.router.navigate(['home']);
  }
}
