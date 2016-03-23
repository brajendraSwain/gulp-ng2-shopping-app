import { Component, OnInit, EventEmitter } from 'angular2/core';
import { Router } from 'angular2/router';


var loginFlag = false;
@Component({
  selector: 'shop-home',
  templateUrl: 'src/app/Component/promote/promote.component.html',
  styleUrls: ['src/app/Component/promote/promote.component.css'],
  outputs: ['homeSelected']
})
export class GridComponet implements OnInit {
  // heroes: Hero[];
  // selectedHero: Hero;
  // 
  generatedNumber: number = 0;
  homeSelected = new EventEmitter<string>();

  constructor(
    private _router: Router) { }

  ngOnInit() {
    console.log('ng clled --- grid');
    // this.getHeroes();
    this.homeSelected.emit('homeeeeeee');
  }
}
