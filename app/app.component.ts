import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HeaderComponent} from "./components/layout/header.component";
import {UserService} from "./components/user.service";
import {AuthService} from "./components/auth.service";

@Component({
  selector: 'my-app',
  templateUrl: '/app/app.component.html',
  directives: [HeaderComponent]
})
export class AppComponent implements OnInit{



  public viewContainerRef;
  public userService;
  public authService;
  public router;

  public constructor(viewContainerRef:ViewContainerRef, userService: UserService, authService: AuthService, router: Router) {

    this.viewContainerRef = viewContainerRef;
    this.userService = userService;
    this.authService = authService;
    this.router = router;

  }

  ngOnInit() {

    /*this.userService.getUser().subscribe((user) =>{
      //this.authService.isLoggedIn = true;
      let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';
      // Redirect the user
      this.router.navigate([redirect]);

    }, (error) => {

      let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';
      // Redirect the user
      this.router.navigate([redirect]);


    });*/

  }
}
