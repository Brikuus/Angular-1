import {Component, inject, output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';


@Component({
  selector: 'app-product-detail',
  imports: [
    ReactiveFormsModule
  ],
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
