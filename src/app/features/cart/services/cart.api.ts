import { Injectable } from '@angular/core';
import {ProductModel} from '../../products/models/product.model';
import {BaseApi} from '../../../shared/services/base.api';

@Injectable({
  providedIn: 'root'
})
export class CartApi extends BaseApi{
  private readonly endpoint = '/products';

  addProduct(product: Omit<ProductModel, 'id'>): Promise<ProductModel> {
  console.log('produit ajouté!');
  return this.post<ProductModel>(`${this.endpoint}`, product);
  }

  removeProduct(productId: number): Promise<boolean> {
    console.log('produit supprimé!');
    this.delete<void>(`${this.endpoint}/${productId}`);
    return Promise.resolve(true);
  }

  clearCart(): void {
    console.log('Panier vidé!');
    return;
  }

  totalCart(): void {
    console.log('total trouvé!');
    return;
  }
}
