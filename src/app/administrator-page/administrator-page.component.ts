import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService, Product } from '../services/product.service';
import { FooterGenericComponent } from '../footer-generic/footer-generic.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-administrator-page',
  templateUrl: './administrator-page.component.html',
  styleUrls: ['./administrator-page.component.scss'],
  imports: [FooterGenericComponent, CommonModule]
})
export class AdministratorPageComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productService.products$
      .subscribe(list => this.products = list);
  }

  addNew() {
    this.router.navigate(['/edit']);
  }

  editProduct(id: number) {
    this.router.navigate(['/edit', id]);
  }

  deleteProduct(id: number) {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
      this.productService.deleteProduct(id);
    }
  }

  irParaHome() {
    this.router.navigate(['/home']);
  }

  irParaEditPage(event: Event) {
    event.preventDefault();
    this.router.navigate(['edit']);
  }
}
