import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';

import {AppComponent}         from './app.component';
import {AppRoutingModule}     from './app-routing.module';
import {DashboardComponent}   from './dashboard/dashboard.component';
import {HeroDetailComponent}  from './hero-detail/hero-detail.component';
import {HeroesComponent}      from './heroes/heroes.component';
import {HeroService}          from './services/hero.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
