import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items: any[] = [];
  token: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchItems();
  }

  fetchItems(): void {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
     
    });

    this.http.get<Item[]>('http://localhost:5000/items/dashboard', { headers })
      .subscribe(
        (data) => {
          console.log(data);
          
          this.items = data;
        },
        (error) => {
          console.log(error);
          
          console.error('Error:', error);
        }
      );
  }
}
