import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROS} from '../mock-heroes';


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  selectedHero!:Hero;
  heroes=HEROS;
  hero:Hero = {
    id:1,
    name:'Windstorm'
  };

  onSelect(hero:Hero){
    this.selectedHero = hero;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
