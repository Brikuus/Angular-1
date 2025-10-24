import {Component, inject} from '@angular/core';
import {CartStore} from '../../services/cart.store';
import {ProductModel} from '../../../products/models/product.model';
import {RouterLink} from '@angular/router';



@Component({
  selector: 'app-cart-summary',
  imports: [
    RouterLink
  ],
  templateUrl: './cart-summary.html',
  styleUrl: './cart-summary.scss'
})
export class CartSummary {
  private cartStore = inject(CartStore);

  // Signals exposés
  products = this.cartStore.products;
  pCount = this.cartStore.productsCount;

  remove(product: ProductModel): void {
    this.cartStore.removeFromCart(product);
  }

  clear(): void {
    this.cartStore.clearCart();
  }

  total(): number {
    return this.cartStore.productsTotal();
  }

}
