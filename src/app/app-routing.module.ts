import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './features/error-page/error-page.component';
import { HomeComponent } from './features/home/home.component';
import { CreateComponent } from './features/item/create/create.component';
import { DashboardComponent } from './features/item/dashboard/dashboard.component';
import { DetailsComponent } from './features/item/details/details.component';
import { EditComponent } from './features/item/edit/edit.component';
import { OwnerPageComponent } from './features/owner-page/owner-page.component';
import { LoginComponent } from './features/user/login/login.component';
import { RegisterComponent } from './features/user/register/register.component';


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
