import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder, private http: HttpClient , private cookieService: CookieService) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      passwordRepeat: ['', Validators.required]
    });
  }

  handleSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;
    const passwordRepeat = this.registerForm.value.passwordRepeat;

    if (password !== passwordRepeat) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    const data = { email, password, passwordRepeat};
    

    this.http.post('http://localhost:5000/users/register', data).subscribe({
      next: (response: any) => {
        this.cookieService.set('token', response.token);
        
        window.location.href = '/';
      },
      error: (error: any) => {
        this.errorMessage = error.error.errorMessage;
        console.error('Error:', error);
      }
    });
  }
}
