import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './ser-rou-auth/home-page/home-page.component';
import { LoginPageComponent } from './ser-rou-auth/login-page/login-page.component';
import { authGuard, authResolve } from './auth.guard';
import { ResolveChildComponent } from './Resolve_Demo/resolve-child/resolve-child.component';
import { ResolveParentComponent } from './Resolve_Demo/resolve-parent/resolve-parent.component';

// const routes: Routes = [
//   { path: '', component: LoginPageComponent},
//   { path: 'home', component: HomePageComponent, canActivate: [authGuard] },
//   //can also apply canActivateChild to apply to the children of a component
//   //canDeactivateChild
// ];

const routes:Routes = [
  {path:'', component:ResolveChildComponent},
  {path:'parent', component:ResolveParentComponent, resolve:{users:authResolve}}
  //route for resolve_demo
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
