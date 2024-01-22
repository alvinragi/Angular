import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './Routing_Demo/content/content.component';
import { RouteParentComponent } from './Routing_Demo/route-parent/route-parent.component';
import { SampleComponent } from './Routing_Demo/sample/sample.component';

const routes: Routes = [
  {path:"route-parent", component:RouteParentComponent},
  {},
  {
    path: 'route-parent',
    children: [
      { path: 'sample/:id', component: SampleComponent },
      { path: 'content', component: ContentComponent },
      // { path: '', redirectTo: 'sample/123', pathMatch: 'full' }, // Redirect to default child route
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
