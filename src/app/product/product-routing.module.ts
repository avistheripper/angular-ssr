import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { ProductDetailsComponent } from './containers/product-details/product-details.component';
import { ProductResolver } from './resolvers/product.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    resolve: {products: ProductResolver}
  },
  {
    path: ':id',
    component: ProductDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
