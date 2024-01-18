import { Component } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  newList: string[];

  constructor(private listService: ListService) {
    this.newList = this.listService.getItemList();
    // console.log(this.newList);
  }
}
