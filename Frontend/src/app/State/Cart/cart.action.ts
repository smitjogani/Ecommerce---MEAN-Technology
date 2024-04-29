import { createAction, props } from '@ngrx/store';

export const addItemToCartRequest = createAction(
  '[Cart] Add item to cart request',
  props<{ reqData: any }>()
);

export const addItemToCartSuccess = createAction(
  '[Cart] Add item to cart success',
  props<{ payload: any }>()
);

export const addItemToCartFailure = createAction(
  '[Cart] Add item to cart failure',
  props<{ error: any }>()
);

export const getCartRequest = createAction('[Cart] get cart request');

export const getCartSuccess = createAction(
  '[Cart] get cart success',
  props<{ payload: any }>()
);

export const getCartFailure = createAction(
  '[Cart] get cart failure',
  props<{ error: any }>()
);

export const removeCartItemRequest = createAction(
  '[Cart] get remove cart item request'
);

export const removeCartItemSuccess = createAction(
  '[Cart] cart item removed',
  props<{ cartItemId: any }>()
);

export const removeCartItemFailure = createAction(
  '[Cart] get cart removing fail',
  props<{ error: any }>()
);

export const updateCartItemRequest = createAction(
  '[Cart] get update cart item request'
);

export const updateCartItemSuccess = createAction(
  '[Cart] update cart item success',
  props<{ payload: any }>()
);

export const updateCartItemFailure = createAction(
  '[Cart] update cart item failure',
  props<{ error: any }>()
);
