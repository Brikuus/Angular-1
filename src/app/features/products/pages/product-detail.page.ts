import {Component, inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [],
  template: `
    <p>
      L'ID du produit est : {{ productId }}
    </p>
  `,
  styles: ``
})
export default class ProductDetailPage {
  private route = inject(ActivatedRoute);
  productId = this.route.snapshot.paramMap.get('id');
}
