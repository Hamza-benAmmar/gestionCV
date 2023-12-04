import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isLoggedIn$: Observable<boolean>;

  constructor(public userService: UserService) {
    this.isLoggedIn$ = this.userService.isLoggedIn;
  }
  /* this.userService.userSubject.subscribe({
      next: (user: UserToken) => {
        console.log(user);
      },
      error: (error: any) => {
        console.log(error);
      },
    });*/
  handleLogout() {
    console.log(this.userService.isLoggedIn);
    this.userService.logout();
  }
}
