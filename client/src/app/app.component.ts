import { Component } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currUser;
  
  constructor(private _router: Router, private _userService: UserService) {
    this._userService.getSession((data) => {
        this.currUser = data.user;
    });
  }
  
  goHome() {
    
    this._userService.getSession((data) => {
        const currUser = data.user;
        if (currUser) {
          this._router.navigate(['home']);
        } else {
          this._router.navigate(['login']);
        }
    });
  }
  
  login() {
    this._userService.getSession((data) => {
        const currUser = data.user;
        if (currUser) {
          this._router.navigate(['home']);
        } else {
          this._router.navigate(['login']);
        }
    });
  }
}
