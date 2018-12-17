import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

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
    ) {}

  ngOnInit() {
    this.route.data
    .pipe(
      map(data => data['product'])
    )
    .subscribe(res => this.product = res);
  }
}
