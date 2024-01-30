import { Component } from '@angular/core';
import {} from '@angular/common/http/testing';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppOne'
  
  addnumbers(m1:number, m2:number):number{
    const sum = m1 + m2;    
    return sum;
  }
}
