import { Injectable } from '@angular/core';
import { UserListService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private listUserService: UserListService;

  constructor(l_Service: UserListService) {
    this.listUserService = l_Service;
  }

  checkUser(inUser: { inputName: string, inputPass: string }): boolean {
    const foundUser = this.listUserService.itemsList.find(user =>
      user.firstname === inUser.inputName && user.password === inUser.inputPass
    );

    return foundUser !== undefined; // Returns true if a user is found, false otherwise
  }
}
