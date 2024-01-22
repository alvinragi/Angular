import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  itemsList: { firstname: string, password: string }[] = [
    { firstname: 'harry', password: 'pass' },
    { firstname: 'styles', password: 'pass' },
  ];
}
