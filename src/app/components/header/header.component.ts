import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../form/models/User';
import { UserToken } from '../form/models/userToken';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
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
