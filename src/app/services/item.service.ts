import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private apiUrl = 'http://localhost:5000/items'; 

  constructor(private http: HttpClient) {}

  register(item: Item): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, item);
  }
}
