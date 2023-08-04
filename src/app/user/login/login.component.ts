import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  error: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
   
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  handleSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const data = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };

    // Implement the login logic using Angular's HttpClient
    // You can use HttpClient to send POST request to your backend
    // For example:
     this.http.post('http://localhost:5000/users/login', data).subscribe(
       (response: any) => {
         // Handle successful login
         console.log(response.token);
         window.location.href = '/';
       },
       (error: any) => {
         // Handle login error
         this.error = error.error;
       }
     );
  }
}
