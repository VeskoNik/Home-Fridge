import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/core/models/user.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  errorMessage: string = '';
  

  constructor(private formBuilder: FormBuilder , private cookieService: CookieService, private userService: UserService) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+@[A-Za-z]+\.[A-Za-z]+$/)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      passwordRepeat: ['', Validators.required],
    });
  }

  handleSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    const user: User = this.registerForm.value;
    
    this.userService.register(user).subscribe({
      next: (response: any) => {
        this.cookieService.set('token', response.token);
  
        
        window.location.href = '/';
      },
      error: (error: any) => {
        if (error.error && error.error.error) {
          this.errorMessage = error.error.error;
        } else {
          this.errorMessage = 'An error occurred';
        }
        console.error('Error:', error);
      }
    });
  }
}
