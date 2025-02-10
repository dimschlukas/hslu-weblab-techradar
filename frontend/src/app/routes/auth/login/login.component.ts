import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginCredentials } from '../../../models/loginFormValues';
import { AuthService } from '../../../shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  errorMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(data: LoginCredentials) {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    console.log('Submit: ', data);
    this.authService.login(data).subscribe({
      next: (isAuthenticated) => {
        if (isAuthenticated) {
          this.router.navigate(['/dashboard']);
        }
      },
      error: (error: Error) => {
        this.errorMessage = error.message;
      }
    });
  }
}
