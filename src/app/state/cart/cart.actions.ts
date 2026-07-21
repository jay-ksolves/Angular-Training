import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { products } from '../../product-api';

export const CartActions = createActionGroup({
  source: 'Cart',
  events: {
    'Add to Cart': props<{ product: products }>(),
    'Remove from Cart': props<{ productId: number }>(),
    'Clear Cart': emptyProps(),
  },
});
