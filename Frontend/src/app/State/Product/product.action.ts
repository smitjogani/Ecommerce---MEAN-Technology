import { createAction, props } from '@ngrx/store';

export const findProductByCatagoryRequest = createAction(
  '[Product] Find Products By Catagory Req.'
);

export const findProductByCatagorySuccess = createAction(
  '[Product] Find Products By Catagory Success',
  props<{ payload: any }>()
);

export const findProductByCatagoryFailure = createAction(
  '[Product] Find Products By Catagory Failure',
  props<{ error: any }>()
);

export const findProductByIdRequest = createAction(
  '[Product] Find Products By Id Req.'
);

export const findProductByIdSuccess = createAction(
  '[Product] Find Products By Id Success',
  props<{ payload: any }>()
);

export const findProductByIdFailure = createAction(
  '[Product] Find Products By Id Failure',
  props<{ error: any }>()
);
