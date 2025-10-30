import {Component, computed, inject} from '@angular/core';
import {CartStore} from '../../services/cart.store';
import {ProductModel} from '../../../products/models/product.model';
import {RouterLink} from '@angular/router';
import {CartFacade} from '../../services/cart.facade';



@Component({
  selector: 'app-cart-summary',
  imports: [
    RouterLink
  ],
  templateUrl: './cart-summary.html',
  styleUrl: './cart-summary.scss'
})
export class CartSummary {
  private cartFacade = inject(CartFacade);
  private cartStore = inject(CartStore);

  products = this.cartStore.products;
  pCount = this.cartStore.productsCount;

  remove(product: ProductModel): void {
    this.cartFacade.removeProduct(product);
  }

  clear(): void {
    this.cartFacade.clearCart();
  }

  total(): number {
    return this.cartFacade.totalCart();
  }

}
