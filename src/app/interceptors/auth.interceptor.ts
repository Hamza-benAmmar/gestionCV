import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, exhaustMap, take } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private userService: UserService) {}
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return this.userService.userSubject.pipe(
      take(1),
      exhaustMap((user) => {
        const token = user?.token;
        if (token) {
          const authRequest = request.clone({
            params: new HttpParams().set('access_token', token),
          });
          return next.handle(authRequest);
        }
        return next.handle(request);
      })
    );
  }
}
