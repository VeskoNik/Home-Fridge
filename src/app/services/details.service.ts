import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  private apiUrl = 'http://localhost:5000'; 

  constructor(private http: HttpClient) { }

  getItemDetails(itemId: string): Observable<any> {
    const url = `${this.apiUrl}/items/${itemId}/details`; 
    return this.http.get(url);
  }
}