import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.scss']
})
export class ProductCard {
  title = 'MacBook Pro';
  price = 2299;
  inStock = true;

  discount = 0.1;
  features = ['Ecran Retina', 'M1 Pro', '16 Go RAM'];

  getDiscountPrice(): number {
    return this.price * (1 - this.discount);
  }

  onBuyClick() {
    if (this.inStock) {
      console.log(`${this.title} ajouté au panier ! `);
    }
  }
}
