import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';
import jwtDecode from 'jwt-decode';
import { ItemService } from 'src/app/core/services/item.service';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

debugger
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  item: any;
  authenticated: boolean = false;
  isOwner: boolean = false;
  notOwner: boolean = false;
  notAuthenticated: boolean = false;
  itemId: string | null = null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemService: ItemService,
    private cookieService: CookieService,
    private http: HttpClient,
    private datePipe: DatePipe
  ) { }
  ngOnInit(): void {

    
    this.itemId = this.route.snapshot.paramMap.get('id'); 
   
    
    this.authenticated = this.cookieService.check('token');
    if (this.itemId) {
      this.itemService.getItemDetails(this.itemId).subscribe(
        (response: any) => {
          this.item = response.item;
          const owner: any = this.item.owner
         const currentUserId: any = jwtDecode(this.cookieService.get('token'))
          
          
          this.isOwner = owner === currentUserId._id
          
        },
        (error: any) => {
          console.error('Error:', error);
          this.router.navigate(['/error']);
        }
      );
    }
  }
  handleDelete() {
    const shouldDelete = window.confirm('Are you sure you want to delete this item?');

    if(!shouldDelete) {
      return;
    }

    this.http
    .get(`http://localhost:5000/items/${this.itemId}/delete`)
    .subscribe(
      (respone: any) => {
        console.log('Item deleted successfully');
        window.location.href = '/dashboard'
      }
    )
  }
}
