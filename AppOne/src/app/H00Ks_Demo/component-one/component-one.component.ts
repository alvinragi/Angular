import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent {
  //to check the working of each LIFTIME HOOKS
  constructor() {
    console.log('Constructor of ComponentOneComponent');    
  }
  // ngOnChanges(){
  //   console.log("printed ngOnChanges");
  // }
  // ngOnInit(){
  //   console.log("printed ngOnInit");
  // }
  // ngDoCheck(){
  //   console.log("printed ngDoCheck");
  // }
  // ngAfterViewInit(){
  //   console.log("printed ngAfterViewInit");
  // }
  // ngAfterViewChecked(){
  //   console.log("printed ngAfterViewChecked");
  // }
  ngOnDestroy(){
    console.log("print ngOnDestroy");
  }
  @Input() sampleInput: string = '';
  buttonClicked(){
    console.log('Button clicked!');    
  }
}
