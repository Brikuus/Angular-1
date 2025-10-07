import {Component, computed, effect, input} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ProductModel } from '../../models/product.model'

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.scss']
})

export class ProductCard {
  product = input.required<ProductModel>();

  displayPrice = computed(() => {
    const p = this.product();
    return p.inStock ? `${p.price}£` : 'Prix indisponnible';
  });

  constructor() {
    effect(() => {
      console.log('Nouveau Produit reçu :', this.product().name);
    });
  }

  onAddToCart(): void {
    console.log(`${this.product().name} ajouté au panier !`);
  }

  onToggleFavorite(): void {
    console.log(`${this.product().name} ajouté aux favoris !`)
  }

}
