import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
    id: number;
    name: string;
    type: string;
    price: number;
    imageUrl: string;
}

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private productsSubject = new BehaviorSubject<Product[]>([]);
    public products$ = this.productsSubject.asObservable();

    private currentId = 1;

    constructor() { }

    addProduct(product: Partial<Product>) {
        const currentProducts = this.productsSubject.getValue();

        const newProduct: Product = {
            id: this.currentId++,
            name: product.name || '',
            type: product.type || '',
            price: product.price || 0,
            imageUrl: product.imageUrl || ''
        };

        this.productsSubject.next([...currentProducts, newProduct]);
    }

    deleteProduct(id: number) {
        const currentProducts = this.productsSubject.getValue();
        const updatedProducts = currentProducts.filter(product => product.id !== id);
        this.productsSubject.next(updatedProducts);
    }

    getProductById(id: number): Product | undefined {
        const products = this.productsSubject.getValue();
        return products.find(product => product.id === id);
    }

    updateProduct(updatedProduct: Product): void {
        const currentProducts = this.productsSubject.getValue();
        const index = currentProducts.findIndex(product => product.id === updatedProduct.id);

        if (index !== -1) {
            currentProducts[index] = updatedProduct;
            this.productsSubject.next([...currentProducts]);
        }
    }
}