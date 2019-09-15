import { FilterPipe } from './dashboard/dashboard-search/filter.pipe';
import { FormsModule } from '@angular/forms';
import { HeroesService } from './shared/heroes.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeaderComponent } from './header/header.component';
import { AddHeroesComponent } from './heroes/add-heroes/add-heroes.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardSearchComponent } from './dashboard/dashboard-search/dashboard-search.component';
import { HeroesDetailComponent } from './heroes/heroes-detail/heroes-detail.component';
import { LimitToPipe } from './dashboard/limit-to.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeaderComponent,
    AddHeroesComponent,
    DashboardSearchComponent,
    HeroesDetailComponent,
    FilterPipe,
    LimitToPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
