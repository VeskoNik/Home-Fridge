import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationComponent } from './layout/header/navigation/navigation.component';
import { CookieService } from 'ngx-cookie-service'; // Make sure ngx-cookie-service is installed.

import { FollowUsComponent } from './layout/footer/follow-us/follow-us.component';
import { OurPagesComponent } from './layout/footer/our-pages/our-pages.component';
import { PartnersComponent } from './layout/footer/partners/partners.component';
import { IntroComponent } from './home/intro/intro.component';
import { TestimonialsComponent } from './home/testimonials/testimonials.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    FollowUsComponent,
    OurPagesComponent,
    PartnersComponent,
    IntroComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CookieService // Add CookieService to the providers array.
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
