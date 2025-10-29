import { Injectable } from '@angular/core';
import {ProductModel} from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsRules {
  static applyDiscount(product: ProductModel, percentage: number): ProductModel {
    if (percentage < 0 || percentage > 100) {
      throw new Error('Discount must be between 0 and 100');
    }
    return { ...product, price: product.price * (1 - percentage / 100) };
  }

  static canBeOrdered(product: ProductModel): boolean {
    return product.stock > 0 && product.inStock && product.price > 0;
  }

  static validate(product: Omit<ProductModel, 'id'>): void {
    if (product.price <= 0) throw new Error('Price must be greater than 0');
    if (product.stock < 0) throw new Error('Stock cannot be negative');
  }
}
