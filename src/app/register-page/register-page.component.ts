import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{Router} from '@angular/router'
import { FooterGenericComponent } from '../footer-generic/footer-generic.component';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
  imports:[FormsModule, FooterGenericComponent]
})
export class RegisterPageComponent {
  constructor(private router: Router){}
  usuarioData = {
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: ''
  };

  cadastrar() {
    if (this.usuarioData.senha === this.usuarioData.confirmarSenha) {
      console.log('Cadastro realizado com sucesso!');
    } else {
      console.log('As senhas não coincidem.');
    }
  }
  irParaLogin(){
    this.router.navigate(['login']);
  }
  irParaHome(){
    this.router.navigate(['home'])
  }
}
