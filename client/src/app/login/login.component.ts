import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  currUser;
  user = {name: ''};
  
  
  constructor(private _userService: UserService, private _router: Router) {
  }

  ngOnInit() {
    this._userService.getSession((data) => {
        this.currUser = data.user;
        if (!this.currUser) {
          this._router.navigate(['login']);
        } else {
          this._router.navigate(['home']);
        }
    });
  }
  
  onSubmit() {
    this._userService.login(this.user);
    this.user.name = '';
    //this._router.navigate(['']);
  }

}
