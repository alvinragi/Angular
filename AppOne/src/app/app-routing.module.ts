import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildOneComponent } from './ASSESSMENT/child-one/child-one.component';
import { ParentOneComponent } from './ASSESSMENT/parent-one/parent-one.component';
import { EditComponent } from './ASSESSMENT/edit/edit.component';
import { authoResolve } from './auth.guard';

// const routes: Routes = [
//   { path: '', component: LoginPageComponent},
//   { path: 'home', component: HomePageComponent, canActivate: [authGuard] },
//   //can also apply canActivateChild to apply to the children of a component
//   //canDeactivateChild
// ];

// const routes:Routes = [
//   {path:'', component:ResolveChildComponent},
//   {path:'parent', component:ResolveParentComponent, resolve:{users:authResolve}}
//   //route for resolve_demo
// ]

const routes:Routes = [
  {path:'', component:ChildOneComponent},
  {path:'home', component:ParentOneComponent},
  {path:'edit', component: EditComponent, resolve:{posts:authoResolve} }
  //route for assessment child parent
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
