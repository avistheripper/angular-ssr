import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Injectable({
    providedIn: 'root'
})
export class ProductResolver implements Resolve<Product[]> {
constructor(private service: ProductService) {}
resolve() {
    console.log('asdasdasdasda');
    
    return this.service.getProducts();
}
}
