import { Injectable } from '@angular/core';
import { UserListService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private listUserService: UserListService;
  isLoggedIn:boolean = false;

  constructor(l_Service: UserListService) {
    this.listUserService = l_Service;
  }

  checkUser(inUser: { inputName: string, inputPass: string }): boolean {
    const foundUser = this.listUserService.itemsList.find(user =>
      user.firstname === inUser.inputName && user.password === inUser.inputPass
    );

    if (foundUser){
      this.isLoggedIn = true;
    }
    else{
      this.isLoggedIn = false;
    }
    
    return foundUser !== undefined; // Returns true if a user is found, false otherwise
  }
}
