import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailsService } from '../../services/details.service';
import { CookieService } from 'ngx-cookie-service';

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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private detailService: DetailsService,
    private cookieService: CookieService,
  ) { }

  ngOnInit(): void {
    console.log('iiiiiii');
    
    const itemId: string | null = this.route.snapshot.paramMap.get('id'); // Explicitly specify the type
    console.log(itemId);
    
    this.authenticated = this.cookieService.check('token');

    if (itemId) {
      this.detailService.getItemDetails(itemId).subscribe(
        (response: any) => {
          this.item = response.item;
          this.isOwner = response.isOwner; // Assign isOwner value directly from the response
        },
        (error: any) => {
          console.error('Error:', error);
          // Redirect to an error page or handle the error as needed
          this.router.navigate(['/error']);
        }
      );
    }
  }
}
