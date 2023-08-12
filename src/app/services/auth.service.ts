import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<any>(null);

  currentUser$ = this.currentUserSubject.asObservable();

  // Call this method when a user logs in 
  loginUser(user: any) {
    this.currentUserSubject.next(user);
  }

  // Call this method when a user logs out
  logoutUser() {
    this.currentUserSubject.next(null);
  }
}
