import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentOneComponent } from './H00Ks_Demo/component-one/component-one.component';
import { ComponentTwoComponent } from './H00Ks_Demo/component-two/component-two.component';
import { ComponentParentComponent } from './H00Ks_Demo/component-parent/component-parent.component';
import { ReactiveFormsModule } from '@angular/forms';

import { RouteParentComponent } from './Routing_Demo/route-parent/route-parent.component';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './Routing_Demo/content/content.component';
import { SampleComponent } from './Routing_Demo/sample/sample.component';
import { FirstapiComponent } from './APIGet_Demo/firstapi/firstapi.component';
import { ParentComponent } from './DynamicButtonClick_Demo/parent/parent.component';
import { ChildComponent } from './DynamicButtonClick_Demo/child/child.component';
import { FormComponent } from './form/form.component';


export const routes:Routes = [
  {component:ContentComponent, path:"content"},
  {component:SampleComponent, path:"sample/:id"},
  {component:SampleComponent, path:"**"}
]

@NgModule({
  declarations: [
    AppComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    ComponentParentComponent,  
    ChildComponent,
    ParentComponent,
    RouteParentComponent,
    ContentComponent,
    SampleComponent,
    FirstapiComponent,
    FormComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
