import { Injectable } from '@angular/core';
import {ProductModel} from '../../products/models/product.model';
import {BaseApi} from '../../../shared/services/base.api';

@Injectable({
  providedIn: 'root'
})
export class CartApi extends BaseApi{
  private readonly endpoint = '/products';

  async addProduct(product: ProductModel): Promise<void> {
  console.log('produit ajouté!');
  //await this.post<ProductModel>(`${this.endpoint}`, product);
  return;
  }

  async removeProduct(productId: number): Promise<void> {
    console.log('produit supprimé!');
    return;
    //this.delete<void>(`${this.endpoint}/${productId}`);

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
