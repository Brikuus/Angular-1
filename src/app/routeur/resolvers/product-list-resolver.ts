import {ActivatedRouteSnapshot, ResolveFn} from '@angular/router';
import {inject} from '@angular/core';
import {ProductModel} from '../../features/products/models/product.model';
import {ProductApi} from '../../features/products/services/product.api'

export const productListResolver: (route: ActivatedRouteSnapshot) => Promise<ProductModel[]> = (route: ActivatedRouteSnapshot) => {
  // 👇 Hop on peut injecter notre Service API directement dans le Resolver
  const productApi = inject(ProductApi);
  // 👇 En plus de ça, le résolver a accès "nativement" à la route actuelle
  const id = route.paramMap.get('id')!;
  // 👇 Le resolver retourne le résultat de getProductById(id)
  return productApi.getProducts();
};
