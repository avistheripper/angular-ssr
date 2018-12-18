import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
import { Product } from './models/product';

@Directive({
    selector: '[appChangeColor]'
})
export class ChangeColorDirective {
    constructor(private elRef: ElementRef, private renderer: Renderer2) {}

    @Input('appChangeColor') set changeColor(product: Product) {
        this.renderer.setStyle(this.elRef.nativeElement.querySelector('.card'), 'color', 'red');
    }
}
