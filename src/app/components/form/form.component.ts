import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulaire',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  constructor(private userService: UserService, private router: Router) {}
  email: string = '';
  password: string = '';
  isFormValid(
    emailInput: HTMLInputElement,
    passwordInput: HTMLInputElement
  ): boolean {
    return emailInput.value.includes('@') && passwordInput.value.length >= 4;
  }
  showAlert: boolean = false;

  checkEmail(value: string) {
    if (!value.includes('@')) {
      this.showAlert = true;
    } else {
      this.showAlert = false;
    }
  }
  onSubmit(emailInput: HTMLInputElement, passwordInput: HTMLInputElement) {
    this.email = emailInput.value;
    this.password = passwordInput.value;

    this.userService
      .login({ email: this.email, password: this.password })
      .subscribe((response) => {
        console.log(response);
        localStorage.setItem('user', JSON.stringify(response));
        this.router.navigate(['login']);
      });

    emailInput.value = '';
    passwordInput.value = '';
  }
}
