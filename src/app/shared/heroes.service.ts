import { Subject } from 'rxjs';
import { Hero } from './hero.model';



export class HeroesService{
     heroChanged = new Subject<Hero[]>();
    private heroes :Hero[]=[
        {id: 11, name: "shubham", desc: "I am an student of arts"},
        {id: 12, name: "jyoti", desc: "I am married to rekha"},
        {id: 13, name: "nigam", desc: "I have just started my startup"},
        {id: 14, name: "priya", desc: "I am a bolgger at medium"},
        {id: 15, name: "gyanesh", desc: "I love to live with dogs"},
        {id: 16, name: "azyan", desc: "I am an student of science"},
        {id: 17, name: "esdr", desc: "I am married to babli"},
        {id: 18, name: "john", desc: "I have just started my shop"},
        {id: 19, name: "priyakant", desc: "I am a bolgger at quera"},
        {id: 20, name: "ganesh", desc: "I love to live with cats"},
        
    ];

    getHeroes(){
        return this.heroes.slice();
    }

    getHero(index: number){
       const object=this.heroes.find(
            (obj)=>{
                return obj.id === index;
            }
         )
        return object;
     };

     removeHero(index: number){
        this.heroes.splice(index, 1);
        this.heroChanged.next(this.heroes);
     }

     updateHero(id: number, newHero:Hero){
       const index=this.heroes.findIndex(
            (obj: Hero)=>{
               return obj.id === id;
            } )
        this.heroes[index]= newHero;
        this.heroChanged.next(this.heroes);
     }

     addHero(newHero: Hero){
        this.heroes.push(newHero);
        this.heroChanged.next(this.heroes);
        
     }
}