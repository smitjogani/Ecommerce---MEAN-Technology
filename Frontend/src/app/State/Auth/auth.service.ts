import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BASE_API_URL } from '../../Config/api';
import { catchError, map, of } from 'rxjs';
import {
  loginFailure,
  loginSuccess,
  registerFailure,
  registerSuccess,
} from './auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private api_url = BASE_API_URL + '/auth';
  constructor(private http: HttpClient, private store: Store) {}

  register(user: any) {
    return this.http
      .post(`${this.api_url}/signup`, user)
      .pipe(
        map((user: any) => {
          if (user.jwt) {
            localStorage.setItem('jwt', user.jwt);
          }
          alert("Signup Succeessfully");
          window.location.reload()
          return registerSuccess({ user });
        }),
        catchError((error) => {
          return of(
            registerFailure(
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            )
          );
        })
      )
      .subscribe((action) => {
        this.store.dispatch(action);
      });
  }

  login(loginData: any) {
    return this.http
      .post(`${this.api_url}/login`, loginData)
      .pipe(
        map((user: any) => {
          if (user.jwt) {
            localStorage.setItem('jwt', user.jwt);
            window.location.reload()
          }
          return loginSuccess({ user });
        }),
        catchError((error) => {
          return of(
            loginFailure(
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            )
          );
        })
      )
      .subscribe((action: any) => {
        this.store.dispatch(action);
      });
  }
}
