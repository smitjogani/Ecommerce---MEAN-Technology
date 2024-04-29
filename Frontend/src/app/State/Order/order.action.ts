import { createAction, props } from '@ngrx/store';

export const createOrderRequest = createAction(
  '[Order] create order request',
  props<{ reqData: any }>()
);

export const createOrderSuccess = createAction(
  '[Order] create order success',
  props<{ order: any }>()
);

export const createOrderFailure = createAction(
  '[Order] create order failure',
  props<{ error: any }>()
);

export const getOrderByIdRequest = createAction(
  '[Order] create order by id request',
  props<{ orderId: string }>()
);

export const getOrderByIdSuccess = createAction(
  '[Order] create order by id success',
  props<{ order: any }>()
);

export const getOrderByIdFailure = createAction(
  '[Order] create order by id failure',
  props<{ error: any }>()
);

export const getOrderHistoryRequest = createAction(
  '[Order] get order history request'
);

export const getOrderHistorySuccess = createAction(
  '[Order] get order history success',
  props<{ orders: any }>()
);

export const getOrderHistoryFailure = createAction(
  '[Order] get order History Failure',
  props<{ error: any }>()
);
