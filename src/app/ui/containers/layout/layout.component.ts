import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <app-header></app-header>
    <div class="container mb-5 pb-5">
    <router-outlet></router-outlet>
    </div>
    <app-footer></app-footer>
  `,
  styles: [`
    h1 {
      color: hotpink
    }
  `]
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
