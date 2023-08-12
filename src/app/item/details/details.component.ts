import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';
import jwtDecode from 'jwt-decode';
import { ItemService } from 'src/app/services/item.service';

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
    private itemService: ItemService,
    private cookieService: CookieService,
  ) { }
  ngOnInit(): void {

    
    const itemId: string | null = this.route.snapshot.paramMap.get('id'); 
   
    
    this.authenticated = this.cookieService.check('token');

    if (itemId) {
      this.itemService.getItemDetails(itemId).subscribe(
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
}
