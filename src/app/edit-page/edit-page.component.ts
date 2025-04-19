import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterGenericComponent } from '../footer-generic/footer-generic.component';

@Component({
  selector: 'app-edit-page',
  imports: [FooterGenericComponent],
  templateUrl: './edit-page.component.html',
  styleUrl: './edit-page.component.scss'
})
export class EditPageComponent {

  constructor(private router: Router){}

  irParaHome(event: Event){
    event.preventDefault();
    this.router.navigate(['home']);
  }
}
