import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './ser-rou-auth/home-page/home-page.component';
import { LoginPageComponent } from './ser-rou-auth/login-page/login-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent},
  { path: 'home', component: HomePageComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
