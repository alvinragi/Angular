import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentOneComponent } from './H00Ks_Demo/component-one/component-one.component';
import { ComponentTwoComponent } from './H00Ks_Demo/component-two/component-two.component';
import { ComponentParentComponent } from './H00Ks_Demo/component-parent/component-parent.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContentComponent } from './Routing_Demo/content/content.component';
import { SampleComponent } from './Routing_Demo/sample/sample.component';
import { RouteParentComponent } from './Routing_Demo/route-parent/route-parent.component';
import { FormComponent } from './FormValidation_Demo/form/form.component';
import { HomeComponent } from './RoutingSubscription_Demo/home/home.component';
import { LoginComponent } from './RoutingSubscription_Demo/login/login.component';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './ser-rou-auth/login-page/login-page.component';
import { HomePageComponent } from './ser-rou-auth/home-page/home-page.component';
import { ResolveChildComponent } from './Resolve_Demo/resolve-child/resolve-child.component';
import { ResolveParentComponent } from './Resolve_Demo/resolve-parent/resolve-parent.component';
import { HttpinterceptorService } from './userIntrfc.service';
import { SetBackground } from './Resolve_Demo/resolve-child/setbackground.directive';
import { ChildOneComponent } from './ASSESSMENT/child-one/child-one.component';
import { ParentOneComponent } from './ASSESSMENT/parent-one/parent-one.component';
import { EditComponent } from './ASSESSMENT/edit/edit.component';
import { DButtonDirective } from './d-button.directive';
import { PipingComponent } from './Pipe_Demo/piping/piping.component';
import { CustomDatePipe } from './Pipe_Demo/customDate.pipe';

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
    HomeComponent,
    LoginComponent,
    LoginPageComponent,
    HomePageComponent,
    ResolveChildComponent,
    ResolveParentComponent,
    SetBackground,
    ChildOneComponent,
    ParentOneComponent,
    EditComponent,
    DButtonDirective,
    PipingComponent,
    CustomDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpinterceptorService,
      multi: true,
    },],
  bootstrap: [AppComponent]
})
export class AppModule {   
 
}
