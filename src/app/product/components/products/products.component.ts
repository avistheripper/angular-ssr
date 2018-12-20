import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';
import { GitService } from '../../services/git-api.serive';

@Component({
  selector: 'app-products',
  template: `
  <div class="row">
    <div class="col-lg-3" *ngFor="let product of products">
        <app-product [appChangeColor]="product" [product]="product" [details]="false"></app-product>
    </div>
</div>
  `,
  styles: []
})
export class ProductsComponent implements OnInit {
  private users: Array<any> = [];
  @Input () public products: Product[];
  constructor(
    private gitService: GitService
  ) { }

  ngOnInit() {
    this.gitService.getUsers()
      .subscribe(data => this.users = data);
  }

}
