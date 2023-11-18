import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private service: UserService) {}
  logout() {
    this.service.logout();
  }
  isUserLoggedIn$(): boolean {
    return this.service.isLoggedIn$();
  }
}
