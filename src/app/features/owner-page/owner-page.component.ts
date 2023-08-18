import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import jwtDecode from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';
import { Item } from '../../core/models/item.model';

@Component({
  selector: 'app-owner-page',
  templateUrl: './owner-page.component.html',
  styleUrls: ['./owner-page.component.css']
})
export class OwnerPageComponent implements OnInit{
  items: any[] = [];
  token: string = ''; 

  constructor(private http: HttpClient,private cookieService: CookieService) { }

  ngOnInit(): void {
    this.fetchItems();
  }

  fetchItems(): void {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `${this.token}`,
    });

    this.http.get<Item[]>('http://localhost:5000/items/dashboard', { headers })
      .subscribe(
        (data) => {
        
          const currentUserId: any = jwtDecode(this.cookieService.get('token'))
          this.items = data.filter(item => item.owner === currentUserId._id);
        },
        (error) => {
          console.log(error);
          
          console.error('Error:', error);
        }
      );
  }
}
