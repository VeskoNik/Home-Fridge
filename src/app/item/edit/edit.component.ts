import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemService } from 'src/app/services/item.service';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [DatePipe]
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
    private datePipe: DatePipe,

  ) {
    this.editItemForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      date: ['', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]],
      type: ['', [Validators.required, Validators.minLength(3)]],
      imageUrl: ['', [Validators.required, Validators.pattern(/^https?:\/\//)]],
      calories: ['', [Validators.required, Validators.min(1)]],
      description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
    });
    this.itemId = this.route.snapshot.paramMap.get('id') as string;
  }

  ngOnInit(): void {
    this.itemService.getItemDetails(this.itemId).subscribe(
      (response: any) => {
        this.item = response.item;
          const formattedDate = this.datePipe.transform(this.item.date, 'yyyy-MM-dd');
        this.editItemForm.patchValue({
          name: this.item.name,
          date: formattedDate,
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
    console.log(this.itemId)
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
          this.router.navigate(['dashboard', this.item._id, 'details']);
        },
        (error: any) => {
          this.errorMessage = error.error.errorMessage;
          console.error('Error:', error);
        }
      );
    
  }

 
}
