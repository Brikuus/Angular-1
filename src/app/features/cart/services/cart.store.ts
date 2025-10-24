import {computed, Injectable, signal} from '@angular/core';
import {ProductModel} from '../../products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartStore {
  private cartProducts = signal<ProductModel[]>([]);


  products = computed(() => this.cartProducts());
  productsCount = computed(() => this.cartProducts().length);

  productsTotal = computed(() => {
    if (this.productsCount() === 0) {
      return 0;
    }
    else {
      let total: number = 0;
      this.cartProducts().forEach((product: ProductModel) => {
        total += product.price;
      })
      return total;
    }
  });

  addToCart = (product: ProductModel): void => {
    this.cartProducts.update(products => [...products, product]);
  }

  removeFromCart = (product: ProductModel): void => {
    let indexCart = this.cartProducts().indexOf(product);
    if (indexCart !== -1) {
      this.cartProducts.update(products => products.filter((u, index) => index !== indexCart));
    }

  }

  clearCart = () => {
    this.cartProducts.set([])
  }
}
