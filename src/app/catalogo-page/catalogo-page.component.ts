import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterGenericComponent } from "../footer-generic/footer-generic.component";

@Component({
  selector: 'app-catalogo-page',
  imports: [FooterGenericComponent],
  templateUrl: './catalogo-page.component.html',
  styleUrl: './catalogo-page.component.scss'
})
export class CatalogoPageComponent {

  constructor(private router: Router){}

  irParaHome(event: Event){
    event.preventDefault();
    this.router.navigate(['home']);
  }

}
