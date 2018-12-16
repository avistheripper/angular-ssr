import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  template: `
    <app-product [product]="product"></app-product>
  `,
  styles: []
})
export class ProductDetailsComponent implements OnInit {
  public product: Product = new Product();
  constructor(
    private route: ActivatedRoute,
    private service: ProductService
    ) {}

  ngOnInit() {
    this.service.getProduct(this.route.snapshot.paramMap.get('id'))
      .subscribe(res => this.product = res);
  }
}
