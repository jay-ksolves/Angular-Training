import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCartItems, selectCartTotalPrice } from '../state/cart/cart.selectors';
import { CartActions } from '../state/cart/cart.actions';
import { products } from '../product-api';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  imports: [RouterLink],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css',
})
export class CartPage {
  private store = inject(Store);
  
  cartItems = this.store.selectSignal(selectCartItems);
  totalPrice = this.store.selectSignal(selectCartTotalPrice);

  removeFromCart(productId: number) {
    this.store.dispatch(CartActions.removeFromCart({ productId }));
  }

  clearCart() {
    this.store.dispatch(CartActions.clearCart());
  }
}
