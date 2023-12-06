import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, tap } from 'rxjs';
import { User } from '../components/form/models/User';
import { UserLogin } from '../components/form/models/userLogin';
import { UserToken } from '../components/form/models/userToken';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _url: string = 'https://apilb.tridevs.net/api/users/login';
  userSubject = new BehaviorSubject<UserToken>(null);
  isLoggedIn: Observable<boolean> = this.userSubject.pipe(
    map((user) => !!user)
  );

  constructor(private httpClient: HttpClient) {
    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        this.userSubject.next(JSON.parse(token));
      }
    } else {
      console.log('localStorage is not available.');
    }
  }

  login(payload: UserLogin): Observable<User> {
    return this.httpClient.post<User>(this._url, payload).pipe(
      tap((user) => {
        const tokenData = {
          token: user.id,
          email: payload.email,
          userId: user.userId,
        };
        localStorage.setItem('token', JSON.stringify(tokenData));
        this.userSubject.next(tokenData);
      }),
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }
  logout() {
    localStorage.removeItem('token');
    this.userSubject.next(null);
  }
}
