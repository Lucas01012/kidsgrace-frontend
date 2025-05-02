import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterGenericComponent } from '../footer-generic/footer-generic.component';
import { ProductService, Product } from '../services/product.service';

@Component({
  selector: 'app-edit-page',
  standalone: true,
  imports: [FooterGenericComponent, FormsModule, CommonModule],
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  produto: Partial<Product> = {
    name: '',
    type: 'Action-Figure',
    price: 0,
    imageUrl: ''
  };
  imagePreview: string | ArrayBuffer | null | undefined = null;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = Number(idParam);
      const existing = this.productService.getProductById(id);
      if (existing) {
        this.produto = { ...existing };
        this.imagePreview = existing.imageUrl;
      }
    }
  }
  

  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
        this.produto.imageUrl = this.imagePreview as string;
      };
      reader.readAsDataURL(file);
    }
  }

  salvarProduto() {
    if (this.produto.id != null) {
      this.productService.updateProduct(this.produto as Product);
    } else {
      this.productService.addProduct({
        name: this.produto.name || '',
        type: this.produto.type || '',
        price: this.produto.price || 0,
        imageUrl: this.produto.imageUrl || ''
      });
    }
    this.router.navigate(['/admin']);
  }

  cancelar() {
    this.router.navigate(['/admin']);
  }

  irParaHome(event: Event) {
    event.preventDefault();
    this.router.navigate(['home']);
  }
}