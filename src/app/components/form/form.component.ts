import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from './models/User';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  form: FormGroup;
  constructor(
    private userService: UserService,
    private router: Router,
    private toastrService: ToastrService
  ) {}
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }
  onFormSubmit() {
    this.userService.login(this.form.value).subscribe({
      next: (user: User) => {
        this.router.navigate(['cv']);
      },
      error: (error: any) => {
        this.toastrService.error('wrong credentials', 'error', {
          timeOut: 2000,
        });
      },
    });
  }
}
