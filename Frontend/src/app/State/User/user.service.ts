import { Injectable } from '@angular/core';
import { BASE_API_URL } from '../../Config/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { catchError, map, of } from 'rxjs';
import {
  getUserProfileFailure,
  getUserProfileSuccess,
  logoutSuccess,
} from './user.action';
import { Router } from '@angular/router';

router: Router;

@Injectable({
  providedIn: 'root',
})
export class userService {
  private api_url = BASE_API_URL + '/api';
  headers: any;
  router: any;

  constructor(private http: HttpClient, private store: Store) {
    this.headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('jwt')}`
    );
  }

  getUserProfile() {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('jwt')}`
    );

    return this.http
      .get(`${this.api_url}/users/profile`, { headers })
      .pipe(
        map((user: any) => {
          // console.log('Get user profile successfuflly ', user);
          localStorage.setItem('userId',user._id)
          return getUserProfileSuccess({ userProfile: user });
        }),
        catchError((error) => {
          return of(
            getUserProfileFailure(
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

  logout() {
    localStorage.removeItem('jwt');
    this.store.dispatch(logoutSuccess());
    window.location.reload();
    window.location.href = '/';
  }
}
