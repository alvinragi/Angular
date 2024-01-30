import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userList: { firstname: string, password: string }[] = [
    { firstname: 'harry', password: 'pass' },
    { firstname: 'styles', password: 'pass' },
  ];

  isLoggedIn: boolean = false;

  constructor() {}

  checkUser(inUser: { inputName: string, inputPass: string }): boolean {
    const foundUser = this.userList.find(user =>
      user.firstname === inUser.inputName && user.password === inUser.inputPass
    );

    this.isLoggedIn = !!foundUser;

    return this.isLoggedIn;
  }
}
