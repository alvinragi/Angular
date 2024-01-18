import { Component } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  input:string = '';
  constructor(private listService:ListService){    
  }
  sendButton(inputValue: string){ 
    this.input = inputValue; 
    this.listService.addItem(this.input);
  }
}

