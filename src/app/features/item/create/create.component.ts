import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  
  errorMessage: string = '';
  addItemForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.addItemForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      date: ['', Validators.required],
      type: ['', [Validators.required, Validators.minLength(3)]],
      imageUrl: ['', [Validators.required, Validators.pattern(/^https?:\/\//)]],
      calories: ['', [Validators.required, Validators.min(1)]],
      description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
    });
  }

 

  ngOnInit() {
    this.addItemForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      date: ['', Validators.required],
      type: ['', [Validators.required, Validators.minLength(3)]],
      imageUrl: ['', [Validators.required, Validators.pattern(/^https?:\/\//)]],
      calories: ['', [Validators.required, Validators.min(1)]],
      description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
    });
  }

  handleSubmit() {
    if (this.addItemForm.invalid) {
      return;
    }

    const itemsData = this.addItemForm.value;

    this.http
      .post('http://localhost:5000/items/create', itemsData, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      .subscribe(
        (response: any) => {
          console.log('Item added successfully');
          window.location.href = '/dashboard';
        },
        (error: any) => {
          this.errorMessage = error.error.errorMessage;
          console.error('Error:', error);
        }
      );
  }
}
