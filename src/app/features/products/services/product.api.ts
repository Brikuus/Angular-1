import { Injectable } from '@angular/core';
import {BaseApi} from '../../../shared/services/base.api';

import {ProductModel} from '../models/product.model';

@Injectable({providedIn: 'root'})
export class ProductApi extends BaseApi {
  private readonly endpoint = '/products.json';

  async getProducts(): Promise<ProductModel[]> {
    return this.get<ProductModel[]>(this.endpoint);
  }

  async getProductById(id: string): Promise<ProductModel> {
    //return this.get<Product>(`${this.endpoint}/${id}`);
    const products = this.get<ProductModel[]>(this.endpoint)
    const product = products.then(products => products.find(product => product.id === Number(id)))
    return product.then(product => product as ProductModel)
  }

  async createProduct(product: ProductModel): Promise<ProductModel> {
    return this.post<ProductModel>(this.endpoint, product);
  }

  async updateProduct(id: string, product: ProductModel): Promise<ProductModel> {
    return this.put<ProductModel>(`${this.endpoint}/${id}`, product);
  }

  async deleteProduct(id: string): Promise<void> {
    return this.delete<void>(`${this.endpoint}/${id}`);
  }
}
