import { Component } from '@angular/core';
import {ProductList} from '../components/product-list/product-list';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ProductList],
  template: `
    <h2>Nos Produits</h2>
    <app-product-list></app-product-list>
  `
})
export default class ProductPage {

}
