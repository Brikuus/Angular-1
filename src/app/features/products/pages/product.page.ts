import {Component, inject} from '@angular/core';
import {ProductList} from '../components/product-list/product-list';
import {ActivatedRoute} from '@angular/router';
import {ProductModel} from '../models/product.model';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ProductList],
  template: `
    <app-product-list></app-product-list>
  `,
  styles: 'h2 {' +
    'text-align: center;' +
    'padding-bottom: 1em;' +
    '}'
})
export default class ProductPage {
  // Route actuelle
  private route = inject(ActivatedRoute);
  // le resolver à stocké sa valeur de retour dans "products" de la route actuelle
  // On met ça dans une propriété "products" de CE composant
  // et pour l'instant... on n'en fait pas grand chose de plus.
  products: ProductModel[] = this.route.snapshot.data['products'];
}
