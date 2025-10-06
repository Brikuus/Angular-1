import { Component } from '@angular/core';
import {ProductList} from '../../products/components/product-list/product-list';

@Component({
  selector: 'app-home.page',
  imports: [],
  template: `
    <section>
      <h2>Ceci est la page d'acceuil</h2>

    </section>
  `,
  styles: `
  section {
    padding: 1rem;
  }`
})

export default class HomePage {

}
