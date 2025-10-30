import {ProductModel} from '../../app/features/products/models/product.model';
import {CartRule} from '../../app/features/cart/domain/cart.rule';
import {inject} from '@angular/core';
import {CartStore} from '../../app/features/cart/services/cart.store';

describe('CartRule (unit tests)', () => {
  let product: ProductModel;
  let cartRule: CartRule;

  beforeEach(() => {

    product = {
      id: 1,
      name: 'Potion',
      description: 'transforme en Shtroumph',
      price: 600,
      imageUrl: '',
      category: 'magic',
      inStock: true,
      stock: 25,
      rating: 5
    }

    cartRule = new CartRule();

  });


  it ('should throw if product has no id', () => {
    const invalidID= {...product, id: -1};

    expect(() => cartRule.validateAdd(invalidID, 100)).toThrowError("Product not found");
  });

  it ('should throw if stock is zero', () => {
    const invalidStock= {...product, stock: 0};


    expect(() => cartRule.validateAdd(invalidStock, 100)).toThrowError('There is no stock');
  });

  it ('should not allow adding more than stock', () => {
    const invalidStock= {...product, stock: 0};

    expect(() => cartRule.validateAdd(invalidStock, 100)).toThrowError('There is no stock');
  });

  it ('should throw if price is negative', () => {
    const invalidPrice = {...product, price: -1};

    expect(()=> cartRule.validateAdd(invalidPrice, 100)).toThrowError('Product does not have a price');
  });

  it ('should not exceed max cart total', () => {
    expect(()=> cartRule.validateTotal(5001)).toThrowError('Total amount is too high');
  });

  it ('should allow adding valid product', () => {
    const validP = cartRule.validateAdd(product, 100);

    expect(validP).toBe(true);
  });



  it ('should throw when removing non-existing product', () => {
    const nonExistingProduct ={...product, id: -1};

    expect(()=> cartRule.validateRemove(-1, nonExistingProduct.id)).toThrowError('Product not found');
  });

  it ('should allow removing valid product', () => {
    const valideP = cartRule.validateRemove(0, product.id);

    expect(valideP).toBe(true);
  });


  it ('should not fail when cart is empty', () => {
    const emptyCart = cartRule.validateClear(0);

    expect(emptyCart).toBe(true);
  });

  it ('should empty cart when clear is called', () => {
    const emptyCart = cartRule.validateClear(5);

    expect(emptyCart).toBe(true);
  });
});
