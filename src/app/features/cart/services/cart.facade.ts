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


  async addProduct(product: ProductModel): Promise<ProductModel>{
    this.cartRule.validateAdd(product, this.cartStore.productsTotal());
    await this.cartApi.addProduct(product);
    this.cartStore.addToCart(product);
    //this.notification.showSuccess('Produit ajouté avec succès 🎉');

    return product;
  }

  async removeProduct(product: ProductModel): Promise<void>{
    this.cartRule.validateRemove(this.cartStore.products().indexOf(product), product.id);
    await this.cartApi.removeProduct(product.id);
    this.cartStore.removeFromCart(product);
    //this.notification.showSuccess('Produit supprimé avec succès 🎉');

    return;
  }

  clearCart(): void{
    this.cartRule.validateClear(this.cartStore.productsCount());
    this.cartApi.clearCart();
    this.cartStore.clearCart();
    //this.notification.showSuccess('Panier vidé avec succès 🎉');
  }

  totalCart(): number{
    this.cartRule.validateTotal(this.cartStore.productsTotal());
    //this.cartApi.totalCart();
    return this.cartStore.productsTotal();
    //this.notification.showSuccess('total trouvé avec succès 🎉');
  }

}
