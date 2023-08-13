import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './item/create/create.component';
import { DashboardComponent } from './item/dashboard/dashboard.component';
import { DetailsComponent } from './item/details/details.component';
import { EditComponent } from './item/edit/edit.component';
import { OwnerPageComponent } from './owner-page/owner-page.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'create', component: CreateComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/:id/details',component: DetailsComponent},
  { path: 'dashboard/:id/edit', component: EditComponent},
  { path: 'owner-page', component: OwnerPageComponent },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
