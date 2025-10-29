import { ProductsRules } from '../../app/features/products/domain/products.rules';
import {ProductModel} from '../../app/features/products/models/product.model';

describe('ProductRules (unit tests)', () => {
  let product: ProductModel;

  // 1. Arrange
  beforeEach(() => {
    product = {
      id: 1,
      name: 'Potion',
      description: 'transforme en Shtroumph',
      price: 100,
      imageUrl: '',
      category: 'magic',
      inStock: true,
      stock: 5,
      rating: 5
    }
  });

  it('should apply discount correctly', () => {
    // 2. Act
    const discounted = ProductsRules.applyDiscount(product, 50);
    // 3. Assert
    expect(discounted.price).toBe(50);
  });

  it('should throw error if discount < 0 or > 100', () => {
    // 2 & 3 : Act & Assert
    expect(() => ProductsRules.applyDiscount(product, -10)).toThrowError();
    // 2 & 3 : Act & Assert
    expect(() => ProductsRules.applyDiscount(product, 150)).toThrowError();
  });

  it('should return false if stock is 0', () => {
    // 2. Act
    const result = ProductsRules.canBeOrdered({ ...product, stock: 0 });
    // 3. Assert
    expect(result).toBeFalse();
  });

  it('should throw error if price <= 0', () => {
    // 2. Act
    const invalid = { ...product, price: 0 };
    // 3. Assert
    expect(() => ProductsRules.validate(invalid)).toThrowError('Price must be greater than 0');
  });

  it('should throw error if stock < 0', () => {
    // 2. Act
    const invalid = { ...product, stock: -1 };
    // 3. Assert
    expect(() => ProductsRules.validate(invalid)).toThrowError('Stock cannot be negative');
  });


});
