import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Injectable({
    providedIn: 'root'
})
export class ProductsResolver implements Resolve<Product[]> {
constructor(private service: ProductService) {}
resolve() {
    return this.service.getProducts();
}
}
