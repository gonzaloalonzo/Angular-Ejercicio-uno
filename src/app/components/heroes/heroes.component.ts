import { Component, OnInit } from '@angular/core';
import { HeroesService,tipoHeroe } from '../../servicios/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: tipoHeroe[]=[];

  constructor( private HEROESSERVICE: HeroesService) { 

  }

  ngOnInit() {

    this.heroes = this.HEROESSERVICE.getHeroes();

    console.log(this.heroes);

  }

}
