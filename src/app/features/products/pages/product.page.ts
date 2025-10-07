import { Component } from '@angular/core';
import {ProductList} from '../components/product-list/product-list';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ProductList],
  template: `
    <h2>Notre catalogue</h2>
    <app-product-list></app-product-list>
  `,
  styles: 'h2 {' +
    'text-align: center;' +
    'padding-bottom: 1em;' +
    '}'
})
export default class ProductPage {

}
