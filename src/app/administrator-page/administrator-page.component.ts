import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService, Product } from '../services/product.service';
import { FooterGenericComponent } from '../footer-generic/footer-generic.component';
import { CommonModule } from '@angular/common';
import { response } from 'express';

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
    this.productService.loadProductsFromServer();

    this.productService.products$.subscribe(products => {
      // Aqui você recebe os produtos atualizados
      this.products = products

      console.log('Produtos:', this.products);
    });
  }

  addNew() {
    this.router.navigate(['/edit']);
  }

  editProduct(id: any) {
    this.router.navigate(['/edit', id]);
  }

  deleteProduct(id: any) {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
      this.productService.deleteProduct(id).subscribe({
        next: (response) =>{
          console.log(response)

          this.productService.loadProductsFromServer();
        },
        error: (erro) =>{
          console.log(erro)

        }
      });
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
