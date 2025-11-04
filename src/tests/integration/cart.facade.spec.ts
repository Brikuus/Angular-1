import {CartFacade} from '../../app/features/cart/services/cart.facade';
import {HttpClient, provideHttpClient} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController, provideHttpClientTesting} from '@angular/common/http/testing';
import {CartStore} from '../../app/features/cart/services/cart.store';
import {TestBed} from '@angular/core/testing';
import {provideZonelessChangeDetection} from '@angular/core';
import {CartApi} from '../../app/features/cart/services/cart.api';
import {ProductModel} from '../../app/features/products/models/product.model';

describe('CartFacade.addProduct (integration)', () => {
  let facade: CartFacade;
  let http: HttpTestingController;
  let store: CartStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection(),
        CartFacade,
        CartApi,
        CartStore],
    });

    facade = TestBed.inject(CartFacade);
    http = TestBed.inject(HttpTestingController);
    store = TestBed.inject(CartStore);
  });

  it('should call API, update store and return cart item', async () => {
    const dto = {id: 100,  name: 'Potion', description: 'Bla bLa blA', price: 50, imageUrl: '', category:'magic', inStock: true, stock: 1, rating: 4};
    const mockResponse = { ...dto, id: 123 };

    const promise = facade.addProduct(dto);

    const req = http.expectOne('/products');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(dto);

    req.flush(mockResponse);

    const result = await promise;
    expect(store.products()[0]).toEqual(result);
  });

  it('should call API, update store and remove cart item', async () => {
    const productToRemove = { id: 101, name: 'Potion', description: 'Bla bLa blA', price: 50, imageUrl: '', category:'magic', inStock: true, stock: 1, rating: 4};

   store.addToCart(productToRemove);
   const promise = facade.removeProduct(productToRemove);

    const req = http.expectOne('/products/101');
    expect(req.request.method).toBe('DELETE');
    expect(req.request.body).toBeNull();

    req.flush(null);

    const result = await promise;
    // expect(result.id).toBe(123);
    expect(store.products()).toEqual([]);
  });
});
