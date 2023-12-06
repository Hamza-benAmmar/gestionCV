import { CanActivateFn } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';
import { map, take } from 'rxjs';

export const loginGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  return userService.isLoggedIn.pipe(
    take(1),
    map((isLoggedIn) => {
      return isLoggedIn ? true : false;
    })
  );
};
