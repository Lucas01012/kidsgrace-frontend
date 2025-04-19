import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FooterGenericComponent } from '../footer-generic/footer-generic.component';
import { CommonModule } from '@angular/common';
import { routes } from '../app.routes';
@Component({
  selector: 'app-administrator-page',
  imports: [FooterGenericComponent],
  templateUrl: './administrator-page.component.html',
  styleUrl: './administrator-page.component.scss'
})
export class AdministratorPageComponent {
  @ViewChild('productForm') productForm!: ElementRef;
  @ViewChild('addProductBtn') addProductBtn!: ElementRef;

  mostrarFormulario: boolean = false;

  constructor(private router: Router) {}

    ngOnInit(): void {

    }

  toggleForm(): void {
    this.mostrarFormulario = !this.mostrarFormulario;
  }
  irParaEditPage(event: Event){
    event.preventDefault();
    this.router.navigate(['edit']);
  }
  irParaHome(){
    this.router.navigate(['home']);
  }
}
