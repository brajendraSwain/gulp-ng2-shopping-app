import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import {UserService} from './../../services/user.service';

import {User} from './../../Interfaces/user';

var loginFlag = false;
@Component({
  selector: 'shop-log-in',
  templateUrl: 'src/app/Component/login/login.component.html',
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  // heroes: Hero[];
  // selectedHero: Hero;

  users: User[];

  constructor(
    private _router: Router, private _userSevice: UserService) { }

  getUsers() {
    this._userSevice.getUsers()
    .subscribe(
      users => { console.log('users', users); this.users = users; },
      err => { console.log('err', err); },
      () => { console.log('get user is completed'); }
    );
  }

  ngOnInit() {
    console.log('ng clled--- login');
    this.getUsers();
  }

  // onSelect(hero: Hero) { this.selectedHero = hero; }

  onRegisterClick() {
    this._router.navigate(['Signup']);
  }
  signinClickHandle() {
    console.log('sign in clicked.......');
    this._router.navigate(['Home']);
  }
}
