import { inject, Injectable } from '@angular/core';
import {CartStore} from './cart.store';
import {ProductModel} from '../../products/models/product.model';
import {CartRule} from '../domain/cart.rule';
import {CartApi} from './cart.api';

@Injectable({
  providedIn: 'root'
})
export class CartFacade {
  private cartRule = new CartRule();
  private cartApi = inject(CartApi);
  private cartStore = inject(CartStore);
  //private notification = inject(Notification);


  async addProduct(product: Omit<ProductModel, 'id'>): Promise<ProductModel>{
    const res = this.cartRule.validateAdd(product, this.cartStore.productsTotal());
    if (!res) {
      console.log("error");
    }

    const added = await this.cartApi.addProduct(product);
    this.cartStore.addToCart(added);
    //this.notification.showSuccess('Produit ajouté avec succès 🎉');

    return added;
  }

  async removeProduct(product: ProductModel): Promise<void>{
    this.cartRule.validateRemove(this.cartStore.products().indexOf(product), product.id);
    const removed = await this.cartApi.removeProduct(product.id);
    this.cartStore.removeFromCart(product);
    //this.notification.showSuccess('Produit supprimé avec succès 🎉');

    return removed;
  }

  async clearCart(): Promise<void>{
    const res = this.cartRule.validateClear(this.cartStore.productsCount());
    if (!res) {
      console.log("error");
    }

    this.cartApi.clearCart();
    this.cartStore.clearCart();
    //this.notification.showSuccess('Panier vidé avec succès 🎉');
  }

  async totalCart(): Promise<number>{
    const res = this.cartRule.validateTotal(this.cartStore.productsTotal());
    if (!res) {
      console.log("error");
    }

    this.cartApi.totalCart();
    return this.cartStore.productsTotal();
    //this.notification.showSuccess('total trouvé avec succès 🎉');
  }

}
