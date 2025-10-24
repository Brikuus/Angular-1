import { Component } from '@angular/core';
import {CartSummary} from '../../cart/components/cart-summary/cart-summary';

@Component({
  selector: 'app-cart.page',
  imports: [
    CartSummary
  ],
  template: `
    <app-cart-summary></app-cart-summary>
  `,
  styles: ``
})
export default class CartPage {

}
