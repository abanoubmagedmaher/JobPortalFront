import { AuthService } from './../../Services/auth.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm!: FormGroup;
  submitted = false;
  errorMessage: string = '';
  errorMessage1:string='';

  constructor(private formBuilder:FormBuilder,    private toaster:ToastrService
    ,private authService:AuthService,private router:Router)
  {
    this.registerForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(7)]],
    })
  }

  get f() { return this.registerForm.controls; }
onSubmit() {
  this.submitted = true;
  if (this.registerForm.invalid) {
    return;
  }

  const user = {
    email: this.f['email'].value,
    password: this.f['password'].value,
  };

  this.authService.register(user).subscribe(
    (response) => {
      this.router.navigate(['/login']);
      this.toaster.success('Registration successful', 'Success');
    },
    (error) => {
      this.errorMessage = 'Please Enter a Valid E-mail like Example@example.example';
      this.errorMessage1 = 'Or Password like Example@2024 and Try Again.';
      this.toaster.error('Please enter a valid Email or Password', 'Registration failed ');
    }
  );
}
}