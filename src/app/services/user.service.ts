import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, tap } from 'rxjs';
import { UserLogin } from '../components/form/models/userLogin';
import { User } from '../components/form/models/User';
import { Console } from 'console';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _url: string = 'https://apilb.tridevs.net/api/users/login';
  userSubject = new BehaviorSubject<User>(null);
  isLoggedIn: Observable<boolean> = this.userSubject.pipe(
    map((user) => !!user)
  );

  constructor(private httpClient: HttpClient) {}
  login(payload: UserLogin): Observable<User> {
    console.log(payload);
    return this.httpClient.post<User>(this._url, payload).pipe(
      tap((user) => {
        console.log('login');
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
      }),
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }
  logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
  }
}
