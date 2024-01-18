import { Component } from '@angular/core';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css']
})
export class ComponentTwoComponent {
  //to check the working of each LIFTIME HOOKS
  constructor() {
    console.log('Constructor of ComponentTwoComponent');    
  }
  // ngOnChanges(){
  //   console.log("printed ngOnChanges2");
  // }
  // ngOnInit(){
  //   console.log("printed ngOnInit2");
  // }
  // ndDoCheck(){
  //   console.log("printed ngDoCheck2");
  // }
  // ngAfterViewInit(){
  //   console.log("printed ngAfterViewInit2");
  // }
  // ngAfterViewChecked(){
  //   console.log("printed ngAfterViewChecked2");
  // }
}
