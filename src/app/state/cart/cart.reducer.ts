import { createReducer, on } from '@ngrx/store';
import { products } from '../../product-api';
import { CartActions } from './cart.actions';

export interface CartState {
  items: products[];
}

export const initialCartState: CartState = {
  items: [],
};

export const cartReducer = createReducer(
  initialCartState,
  on(CartActions.addToCart, (state, { product }) => ({
    ...state,
    items: [...state.items, product],
  })),
  on(CartActions.removeFromCart, (state, { productId }) => ({
    ...state,
    items: state.items.filter((item) => item.id !== productId),
  })),
  on(CartActions.clearCart, (state) => ({
    ...state,
    items: [],
  }))
);
