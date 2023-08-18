import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


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
    private cookieService: CookieService,
  
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

     this.http.post('http://localhost:5000/users/login', data).subscribe(
       (response: any) => {
         
         this.cookieService.set('token', response.token);
         window.location.href = '/';
       },
       (error: any) => {
       
         this.error = error.error;
         
       }
     );
  }
}