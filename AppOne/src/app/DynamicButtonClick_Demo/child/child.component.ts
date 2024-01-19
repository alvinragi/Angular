import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() clickFunction():void{
  };
//the code inside this function will never work since it is a refernce to the input
  getUsers() {  
    if (this.clickFunction) {
      this.clickFunction();
    }
  }
}
