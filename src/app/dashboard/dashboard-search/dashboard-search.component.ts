import { Hero } from './../../shared/hero.model';
import { HeroesService } from './../../shared/heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-search',
  templateUrl: './dashboard-search.component.html',
  styleUrls: ['./dashboard-search.component.css']
})
export class DashboardSearchComponent implements OnInit {
  heroes: Hero[];
  search: string;
  constructor(private heroService: HeroesService) { }

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }
  

}
