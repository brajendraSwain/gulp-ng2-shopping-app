import { Component, OnInit, EventEmitter } from 'angular2/core';
import { Router } from 'angular2/router';


var loginFlag = false;
@Component({
  selector: 'shop-home',
  template: '<h1>Brajendra</h1>',
  styleUrls: ['src/app/Component/promote/promote.component.css'],
  outputs: ['homeSelected']
})
export class PromoteComponent implements OnInit {
  // heroes: Hero[];
  // selectedHero: Hero;
  // 
  generatedNumber: number = 0;
  homeSelected = new EventEmitter<string>();

  constructor(
    private _router: Router) {}

  ngOnInit() {
    console.log('ng clled --- promote');
    // this.getHeroes();
  }
}
