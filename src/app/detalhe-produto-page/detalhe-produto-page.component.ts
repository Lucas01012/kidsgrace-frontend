import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService, Product } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { FooterGenericComponent } from '../footer-generic/footer-generic.component';
import  { HeaderComponent } from '../header/header.component'

@Component({
  selector: 'app-detalhe-produto-page',
  imports: [FooterGenericComponent, CommonModule, HeaderComponent],
  templateUrl: './detalhe-produto-page.component.html',
  styleUrl: './detalhe-produto-page.component.scss'
})
export class DetalheProdutoPageComponent implements OnInit {
    produto?: Product;

    constructor(
      private route: ActivatedRoute,
      private productService: ProductService
    ) {}

    ngOnInit() {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.produto = this.productService.getProductById(id);
    }

}
