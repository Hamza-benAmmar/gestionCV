import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { UserService } from '../../services/user.service';
import { UserToken } from '../../modules/authentication/models/userToken';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(public userService: UserService) {}
  ngOnInit(): void {
    this.userService.userSubject.subscribe({
      next: (user: UserToken) => {
        console.log(user);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  handleLogout() {
    console.log(this.userService.isLoggedIn);
    this.userService.logout();
  }
}
