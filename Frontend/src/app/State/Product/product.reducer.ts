import { createReducer, on } from '@ngrx/store';
import {
  findProductByCatagoryFailure,
  findProductByCatagorySuccess,
  findProductByIdFailure,
  findProductByIdSuccess,
} from './product.action';

const initialState = {
  products: [],
  loading: false,
  error: null,
  product: null,
};

export const productReducer = createReducer(
  initialState,
  on(findProductByCatagorySuccess, (state, { payload }) => ({
    ...state,
    products: payload,
    content: payload.content,
    loading: false,
  })),
  on(findProductByIdSuccess, (state, { payload }) => ({
    ...state,
    product: payload,
    loading: false,
  })),
  on(
    findProductByCatagoryFailure,
    findProductByIdFailure,
    (state, { error }) => ({
      ...state,
      error: error,
      loading: false,
    })
  )
);
