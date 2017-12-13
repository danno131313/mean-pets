import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
  currUser;
  
  constructor(private _http: HttpClient, private _router: Router) {
    this.getSession((data) => {
        this.currUser = data.user;
        if (!this.currUser) {
          this._router.navigate(['login']);
        }
    });
  }
  
  login(user) {
      this._http.post('/login', user).subscribe((res) => {
          console.log(res);
          this._router.navigate(['home']);
      });
  }
  
  getSession(callback) {
      this._http.get('/getsession').subscribe((data) => {
        console.log("THE SESSION OBJECT: ", data);
        callback(data);
      });
  }

}
