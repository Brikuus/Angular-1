import {Component, OnInit, inject, signal, computed} from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductCard} from '../product-card/product-card';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Filter} from '../filter/filter';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCard, ReactiveFormsModule, FormsModule, Filter],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.scss']
})
export class ProductList implements OnInit {
  products: ProductModel[] = [];
  cartItems: ProductModel[] = [];
  favoriteIds: number[] = [];
  category = signal('')

  private route=inject(ActivatedRoute);

  ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts(): void {
    this.products = this.route.snapshot.data['products'];
  }

  onProductAddedToCart(product: ProductModel): void {
    this.cartItems.push(product);
    console.log(`${product.name} ajouté au panier !`);
    console.log(`Panier: ${this.cartItems.length} articles`);
  }

  onProductAddedToFavorites(product: ProductModel): void {
    this.favoriteIds.push(product.id);
    console.log(`${product.name} ajouté aux favoris !`);
  }

  onProductRemovedFromFavorites(product: ProductModel): void {
    this.favoriteIds = this.favoriteIds.filter(id => id !== product.id);
    console.log(`${product.name} retiré des favoris !`);
  }

  FiltreParCategorie = computed(() => {
    return this.category() !== ''
      ? this.products.filter(p => p.category === this.category())
      : this.products;
  })

  onChangeCategory(category: string): void {
    this.category.set(category);
    console.log(`${category || 'Reset'} est maintenant appliqué !`);
    console.log('Category:', category);
  }



  // Méthodes utilitaires
  isInFavorites(productId: number): boolean {
    return this.favoriteIds.includes(productId);
  }

  getCartCount(): number {
    return this.cartItems.length;
  }

  getFavoritesCount(): number {
    return this.favoriteIds.length;
  }

  getTotalProducts(): number {
    return this.products.length;
  }

  onNotationAdded(event: { productId: number; rating: number; }): void {
    console.log(`Nouvelle note ${event.rating} !`);
    const product = this.products.find(p => p.id === event.productId);

    if (!product) return;

    if (!product.reviews) {
      product.reviews = [product.rating];
    }

    product.reviews.push(event.rating);

    const total = product.reviews.reduce((sum: any, r: any) => sum + r, 0);
    const average = total / product.reviews.length;

    product.rating = parseFloat(average.toFixed(1));

    console.log(`Nouvelle note ajoutée pour ${product.name} : ${event.rating}/5 - Nouvelle moyenne : ${product.rating}/5`)
  }

}
