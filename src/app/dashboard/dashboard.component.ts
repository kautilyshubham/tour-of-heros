import { Hero } from './../shared/hero.model';
import { HeroesService } from './../shared/heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];

  constructor( private heroesService: HeroesService) { }

  ngOnInit() {
      this.heroes=this.heroesService.getHeroes();
    
  }

}
