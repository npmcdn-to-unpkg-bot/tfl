import { Component } from '@angular/core';
import {UserService} from "./user.service";

@Component({
  selector: 'login-component',
  templateUrl: "./app/components/login.component.html",
})
export class LoginComponent {

  user: any;
  loginData: any;
  loggedIn: any;

  constructor(private userService: UserService) {

    this.loginData = {email: "test@test.com", password: "Password"};
    this.userService.user$.subscribe((userData) => {
      this.user = userData;
    });
    this.userService.loggedIn$.subscribe((loggedIn) => {
      this.loggedIn = loggedIn;
    });
  }


  onSubmit(loginData) {

    console.log(loginData);

    this.userService.login(loginData).subscribe((result) => {
      if (result) {
        console.log('The result of the login is: ', result);
      }
    });
  }

}