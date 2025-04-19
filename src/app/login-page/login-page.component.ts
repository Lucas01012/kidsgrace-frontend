import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FooterGenericComponent } from '../footer-generic/footer-generic.component';

    @Component({
      selector: 'app-login-page',
      standalone: true,
      imports: [FormsModule, FooterGenericComponent],
      templateUrl: './login-page.component.html',
      styleUrls: ['./login-page.component.scss']
    })
    export class LoginPageComponent {
      constructor(private router: Router){}

      usuarioData = {
        email: '',
        senha: ''
      };
      login() {
        console.log(this.usuarioData);
      }
      cadastrar(){
        this.router.navigate(['register']);
      }
      irParaHome(){
        this.router.navigate(['home'])
      }
    }