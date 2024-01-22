import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './ser-rou-auth/home-page/home-page.component';
import { LoginPageComponent } from './ser-rou-auth/login-page/login-page.component';
import { authGuard } from './ser-rou-auth/auth.guard';

const routes: Routes = [
  { path: '', component: LoginPageComponent},
  { path: 'home', component: HomePageComponent, canActivate: [authGuard] },
  //can also apply canActivateChild to apply to the children of a component
  //canDeactivateChild
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
