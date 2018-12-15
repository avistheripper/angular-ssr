import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <app-header></app-header>
    <div class="container my-5 py-5">
    <router-outlet></router-outlet>
    </div>
    <app-footer></app-footer>
  `,
  styles: [`
    h1 {
      color: hotpink
    }
    .container {
      height: 85vh;
    }
  `]
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
