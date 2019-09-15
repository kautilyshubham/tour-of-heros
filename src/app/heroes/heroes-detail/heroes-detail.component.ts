import { Hero } from './../../shared/hero.model';
import { HeroesService } from './../../shared/heroes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.css']
})
export class HeroesDetailComponent implements OnInit {
 public heroes:Hero;
 public id=0 ;
  constructor(private route: ActivatedRoute,
              private heroService: HeroesService,
              private router:Router) { }

  ngOnInit() {
   
    this.route.params.subscribe(
      (params: Params)=>{
       this.id=+params['id']
      }
    );
    this.heroes=this.heroService.getHero(this.id);    
  }

  goBack(){
    this.router.navigate(["../"],{relativeTo:this.route.firstChild});
  }

  onSave(){
    let newHero = new Hero ;
    newHero.id = this.id;
    newHero.name = this.heroes.name;
    newHero.desc = this.heroes.desc;
    this.heroService.updateHero(this.id,newHero);
  }

}
