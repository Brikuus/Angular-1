import {Component, effect, inject, input, output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModel } from '../../models/product.model'
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NoteForm } from '../note-form/note-form';
import {CartStore} from '../../../cart/services/cart.store';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, RouterLink, ReactiveFormsModule, NoteForm],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.scss']
})

export class ProductCard {
  protected showRatingForm: boolean = false;

  private cartStore = inject(CartStore);


  product = input.required<ProductModel>();

  productAddedToFavorites = output<ProductModel>();
  productRemovedFromFavorites = output<ProductModel>();

  notationAdded =output<{productId: number, rating: number}> ();

  isFavorite = input<boolean>(false);



  constructor() {
    effect(() => {
      console.log('Nouveau Produit reçu :', this.product().name);
    });
  }

  onAddToCart(product: ProductModel): void {
    this.cartStore.addToCart(product);
  }

  onToggleFavorite(): void {
    if (this.isFavorite()) {
      this.productRemovedFromFavorites.emit(this.product());

    } else {
      this.productAddedToFavorites.emit(this.product());
    }
  }
  updateShowRatingForm(): void {
    this.showRatingForm = !this.showRatingForm;
  }

  onSubmitNotation(event: { id: number, rating: number }) {
    this.notationAdded.emit({productId: event.id, rating: event.rating})
    this.showRatingForm = false;
  }

}
