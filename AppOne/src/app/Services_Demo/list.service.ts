import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private itemsList: string[] = [];

  addItem(item:string):void{
    this.itemsList.push(item);
  }
  getItemList(): string[] {
    return this.itemsList;
  }
}
