import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Injectable({
    providedIn: 'root'
})
export class ProductResolver implements Resolve<Product> {
constructor(private service: ProductService) {}
resolve(route: ActivatedRouteSnapshot) {
    return this.service.getProduct(route.paramMap.get('id'));
}
}
