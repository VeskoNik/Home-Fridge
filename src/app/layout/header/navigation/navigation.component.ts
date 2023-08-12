import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  hasToken: boolean;

  constructor(private router: Router, private cookieService: CookieService) {
    this.hasToken = this.cookieService.check('token');
  }

  logout(): void {
    this.cookieService.delete('token');
    this.router.navigate(['/']);
  }
}