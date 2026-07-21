import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductAPi, products } from '../product-api';
import { Store } from '@ngrx/store';
import { CartActions } from '../state/cart/cart.actions';

@Component({
  selector: 'app-product-page',
  imports: [],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})
export class ProductPage {
  private productApi = inject(ProductAPi);
  private store = inject(Store);

  products = toSignal(this.productApi.getProducts(), {
    initialValue: [] as products[],
  });

  AddToCart(product: products) {
    this.store.dispatch(CartActions.addToCart({ product }));
  }
}
