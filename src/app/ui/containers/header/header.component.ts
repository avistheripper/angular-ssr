import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-expand navbar-dark bg-dark fixed-top">
      <a routerLink="/" class="navbar-brand">
        <img [attr.src]="logo" [attr.alt]="title" width="130" height="30">
      </a>
      <div class="collapse navbar-collapse">
        <div class="navbar-nav">
          <a class="nav-item nav-link"
             *ngFor="let link of Links"
             [routerLink]="link.url">
              {{link.label}}
              </a>
        </div>
      </div>
    </nav>
  `,
  styles: []
})
export class HeaderComponent {
  public logo = 'assets/logo.png';
  public title = 'Store';
  public Links = [
    {
      label: 'Products',
      url: '/products'
    }
  ];
}
