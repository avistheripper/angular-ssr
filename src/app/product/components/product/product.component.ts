import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  template: `
  <div class="card mb-3">
    <div class="card-header my-2">
        <ng-container *ngIf="details; else link">
            {{ product.title }}
        </ng-container>
        <ng-template #link>
            <a [routerLink]="product.id">Go to {{ product.id }}</a>
        </ng-template>
    </div>
      <div class="card-body" *ngIf="!details">
        <p>{{ product.body }}</p>
      </div>
      <div class="card-footer">
        <h4>Post #{{ product.id }}</h4>
      </div>
  </div>
  `,
  styles: []
})
export class ProductComponent implements OnInit {
  @Input () product: Product;
  @Input () details: boolean;
  constructor() { }

  ngOnInit() {
  }

}
