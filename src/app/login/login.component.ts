import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup;
  submitted = false;
  errorMessage: string = '';

  constructor(private formBuilder:FormBuilder,
    private authService:AuthService,
    private router:Router,
    private toaster:ToastrService
  )
  {
    this.loginForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(7)]],
    })
  }

  get f() { return this.loginForm.controls; }
onSubmit() {
  this.submitted = true;
  if (this.loginForm.invalid) {
    return;
  }

  const user = {
    email: this.f['email'].value,
    password: this.f['password'].value,
  };

  this.authService.login(user).subscribe(
    (response) => {

      localStorage.setItem('eToken', response.token);
      this.authService.saveUserData();
      this.toaster.success(' Welcome back! 😊', 'Success');
      this.router.navigate(['/Jobs']);
    },
    (error) => {
      this.errorMessage = 'Incorrect E-mail or password Please try again.';
      this.toaster.error(' Incorrect E-mail or password.', 'Error');
    }
  );
}
}