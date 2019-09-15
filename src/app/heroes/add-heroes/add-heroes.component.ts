import { HeroesService } from './../../shared/heroes.service';
import { Hero } from './../../shared/hero.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-heroes',
  templateUrl: './add-heroes.component.html',
  styleUrls: ['./add-heroes.component.css']
})
export class AddHeroesComponent implements OnInit {

  constructor(private heroService: HeroesService) { }

  ngOnInit() {
  }

  onClear(form: NgForm){
    form.reset();
  }

  onSave(form: NgForm){
    let newHero = new Hero;
    newHero.id = 21;
    newHero.name = form.value.name;
    newHero.desc = form.value.desc;

    this.heroService.addHero(newHero);
     
  }

}
