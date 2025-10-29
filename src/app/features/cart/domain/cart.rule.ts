import {ProductModel} from '../../products/models/product.model';
import {CartStore} from '../services/cart.store';


export class CartRule {
  private totalMax = 5000;

  validateId(product: ProductModel): boolean {
    if (product.id === null || product.id < 0 || product.id === undefined) throw new Error('Product not found');
    return true;
  }

  validateAdd(product: Omit<ProductModel, 'id'>, totalOfProducts: number): boolean {
    if (product.price === undefined || product.price <= 0 || product.price === null) throw new Error('Product does not have a price');
    if (totalOfProducts > this.totalMax) throw new Error('Total amount is too high');
    if (product.stock <= 0) throw new Error('There is no stock');
    return true;
  }

  validateRemove(index: number, id: number): boolean {
    if (index === -1 || id === -1) throw new Error('Product not found');
    return true;
  }

  validateTotal(totalOfProducts: number): boolean {
    if (totalOfProducts > this.totalMax) throw new Error('Total amount is too high');
    return true;
  }

  validateClear(count: number): boolean {
    if (count < 0) throw new Error('Cart count is negative');
    return true;
  }
}
