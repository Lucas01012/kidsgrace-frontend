import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CatalogoComponent } from '../catalogo/catalogo.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FooterGenericComponent } from '../footer-generic/footer-generic.component';
@Component({
  selector: 'app-home',
  imports: [HeaderComponent, CatalogoComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
constructor(router: Router){}
}
