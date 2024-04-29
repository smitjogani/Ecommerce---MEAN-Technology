import { Injectable } from '@angular/core';
import { BASE_API_URL } from '../../Config/api';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import {
  findProductByCatagoryFailure,
  findProductByCatagorySuccess,
  findProductByIdFailure,
  findProductByIdSuccess,
} from './product.action';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  API_BASE_URL = BASE_API_URL;

  private getHeader(): HttpHeaders {
    const token = localStorage.getItem('jwt');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  constructor(
    private store: Store,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  findProductByCategory(reqData: any) {
    const {
      fore,
      typeOfCloth,
    } = reqData;

    let params = new HttpParams()
      .set('fore', fore)
      .set('typeOfCloth', typeOfCloth)

    const headers = this.getHeader();

    return this.http
      .get(`${this.API_BASE_URL}/api/products/allproducts`, 
      {
        headers,
        params,
      }
    )
      .pipe(
        map((data: any) => {
          console.log('Product Data : ', data);
          return findProductByCatagorySuccess({ payload: data });
        }),
        catchError((error: any) => {
          return of(
            findProductByCatagoryFailure(
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            )
          );
        })
      )
      .subscribe((action) => this.store.dispatch(action));
  }

  findProductById(productId: any) {
    const headers = this.getHeader();

    return this.http
      .get(`${this.API_BASE_URL}/api/products/id/${productId}`, {
        headers,
      })
      .pipe(
        map((data: any) => {
          console.log('Product Data by id : ', data);
          return findProductByIdSuccess({ payload: data });
        }),
        catchError((error: any) => {
          return of(
            findProductByIdFailure(
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            )
          );
        })
      )
      .subscribe((action) => this.store.dispatch(action));
  }
}
