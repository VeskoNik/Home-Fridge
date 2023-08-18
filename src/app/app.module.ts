import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { NavigationComponent } from './shared/layout/header/navigation/navigation.component';
import { CookieService } from 'ngx-cookie-service'; 
import { FollowUsComponent } from './shared/layout/footer/follow-us/follow-us.component';
import { OurPagesComponent } from './shared/layout/footer/our-pages/our-pages.component';
import { PartnersComponent } from './shared/layout/footer/partners/partners.component';
import { IntroComponent } from './features/home/intro/intro.component';
import { TestimonialsComponent } from './features/home/testimonials/testimonials.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './features/user/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './features/user/register/register.component';
import { CreateComponent } from './features/item/create/create.component';
import { DashboardComponent } from './features/item/dashboard/dashboard.component';
import { DetailsComponent } from './features/item/details/details.component';
import { EditComponent } from './features/item/edit/edit.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ErrorPageComponent } from './features/error-page/error-page.component';
import { OwnerPageComponent } from './features/owner-page/owner-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    TestimonialsComponent,
    LoginComponent,
    RegisterComponent,
    CreateComponent,
    DashboardComponent,
    DetailsComponent,
    EditComponent,
    ErrorPageComponent,
    OwnerPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    CookieService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
