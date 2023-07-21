import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurPagesComponent } from './layout/footer/our-pages/our-pages.component';


const routes: Routes = [
  
  { path: 'our-pages', component: OurPagesComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
