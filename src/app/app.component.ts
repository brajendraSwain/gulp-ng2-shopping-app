import { Component, OnInit, bind } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, Location } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import { LocationStrategy, HashLocationStrategy} from 'angular2/router';

import { LoginComponent } from './Component/login/login.component';
import { SignupComponent } from './Component/signup/signup.component';
import { HomeComponent } from './Component/home/home.component';
import { ProductAddComponent } from './Component/product-add/prodAdd.component';

import {PromoteComponent} from './Component/promote/promote.component';


/**
 * [Component description]
 *
 */
@Component({
  selector: 'my-app',
  template: `
  <div class="container app" (homeSelected)="selection()">
    <div class="container-fluid header" >
      <ul class="nav nav-tabs nav-justified">
        <li [class.active]="isActive('/home', '/login', '/signup', '')" ><a [routerLink]="['/Home']">Home1</a></li>
        <li [class.active]="isActive('/product-add')" ><a [routerLink]="['/ProductAdd']">Add Product</a></li>
        <li [class.active]="isActive('/prom')" ><a [routerLink]="['/Promote']">Promote</a></li>
      </ul>
    </div>
    <router-outlet (homeSelected)="selection()"></router-outlet>
  </div>
`,
  styleUrls: ['/src/app/app.component.css'],
  directives: [ROUTER_DIRECTIVES, HomeComponent],
  providers: [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    bind(LocationStrategy).toClass(HashLocationStrategy)
  ]
})


/**
 * [RouteConfig description]
 * @param {true                 }}  {    path [description]
 * @param {HeroDetailComponent  }}  {    path [description]
 * @param {HeroesComponent,     }]} {    path [description]
 */
@RouteConfig([
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent,
    useAsDefault: true
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignupComponent
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeComponent
  },
  {
    path: '/product-add',
    name: 'ProductAdd',
    component: ProductAddComponent
  },
  {
    path: '/prom',
    name: 'Promote',
    component: PromoteComponent
  }
])

/**
 * 
 */
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  location: Location;
  constructor(private _router: Router, location: Location) {
    this.location = location;
  }

  ngOnInit() {
    console.log('ng clled');
  }

  isActive() {
    let argumentsArray = Array.prototype.slice.call(arguments);
    return argumentsArray.indexOf(this.location.path()) !== -1;
  }

  selection() {
    console.log('---------------------------------------');
  }
};
