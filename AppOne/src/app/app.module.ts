import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentOneComponent } from './H00Ks_Demo/component-one/component-one.component';
import { ComponentTwoComponent } from './H00Ks_Demo/component-two/component-two.component';
import { ComponentParentComponent } from './H00Ks_Demo/component-parent/component-parent.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContentComponent } from './Routing_Demo/content/content.component';
import { RouterModule, Routes } from '@angular/router';
import { SampleComponent } from './Routing_Demo/sample/sample.component';
import { RouteParentComponent } from './Routing_Demo/route-parent/route-parent.component';
import { FormComponent } from './FormValidation_Demo/form/form.component';



@NgModule({
  declarations: [
    AppComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    ComponentParentComponent,  
    RouteParentComponent,
    ContentComponent,
    SampleComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
