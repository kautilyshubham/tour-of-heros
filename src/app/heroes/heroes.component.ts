import { HeroesService } from './../shared/heroes.service';
import { Hero } from './../shared/hero.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:Hero[];
  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.heroes=this.heroesService.getHeroes();
   this.heroesService.heroChanged.subscribe(
      (heros :Hero[])=>{
        this.heroes = heros;
      }
    )
  }

  oncut(index){
    console.log(index);
    this.heroesService.removeHero(index);
  }

}
