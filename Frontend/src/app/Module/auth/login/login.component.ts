import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AuthService } from '../../../State/Auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private router: Router,
    private authbuilder: AuthService
  ) {}

  loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  submitLoginForm(): void {
    if (this.loginForm.valid) {
      if (this.authbuilder.login(this.loginForm.value)) {
        if (
          this.loginForm.value.email == 'admin@gmail.com' &&
          this.loginForm.value.password == 'admin123'
        ) {
          this.router.navigate(['admin/orders']);
          // alert("Admin Login Successfully")
        } else {
          this.router.navigate(['/']);
          alert("Login Successfully")
        }
      }
      // console.log('Login Data : ', this.loginForm.value);
    }
  }

  navigateReg(path: any) {
    this.router.navigate([path]);
  }
}
