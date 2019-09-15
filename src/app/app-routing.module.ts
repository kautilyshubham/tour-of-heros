import { HeroesDetailComponent } from './heroes/heroes-detail/heroes-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoute: Routes=[
    {path: "dashboard", component: DashboardComponent},
    {path: "heroes", component: HeroesComponent},
    {path: "detail/:id", component: HeroesDetailComponent}
    
]
@NgModule({
    imports:[
        RouterModule.forRoot(appRoute)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{

}