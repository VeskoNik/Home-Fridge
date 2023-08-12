import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ItemService } from 'src/app/services/item.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editItemForm: FormGroup;
  itemId: string;
  item: any;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private itemService: ItemService,
    private http: HttpClient,
  ) {
    this.editItemForm = this.formBuilder.group({
      name: [''],
      date: [''],
      type: [''],
      imageUrl: [''],
      calories: [''],
      description: [''],
    });
    this.itemId = this.route.snapshot.paramMap.get('id') as string;
  }

  ngOnInit(): void {
    this.itemService.getItemDetails(this.itemId).subscribe(
      (response: any) => {
        this.item = response.item;
        this.editItemForm.patchValue({
          name: this.item.name,
          date: this.item.date,
          type: this.item.type,
          imageUrl: this.item.imageUrl,
          calories: this.item.calories,
          description: this.item.description,
        });
      },
      (error: any) => {
        console.error('Error:', error);
        this.router.navigate(['/error']);
      }
    );
  }

  handleSubmit() {
    if (this.editItemForm.invalid) {
      return;
    }
    const itemsData = this.editItemForm.value;
    console.log(itemsData);
    this.http
      .post(`http://localhost:5000/items/${this.itemId}/edit`, itemsData, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      .subscribe(
        (response: any) => {
          console.log('Item added successfully');
          window.location.href = `/dashboard/${this.itemId}/details`;
        },
        (error: any) => {
          this.errorMessage = error.error.errorMessage;
          console.error('Error:', error);
        }
      );
    
  }
}
