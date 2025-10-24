import {Component, inject, output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {ProductCard} from '../components/product-card/product-card';
import {ProductModel} from '../models/product.model';


@Component({
  selector: 'app-product-detail',
  imports: [
    ReactiveFormsModule,
    ProductCard
  ],
  template: `
    <p>
      L'ID du produit est : {{ productId }}
    </p>

    <app-product-card [product]="product"></app-product-card>
  `,

  styles: ``
})


export default class ProductDetailPage {
  private route = inject(ActivatedRoute);
  productId = this.route.snapshot.paramMap.get('id');
  product: ProductModel = this.route.snapshot.data['product'] as ProductModel;



}
