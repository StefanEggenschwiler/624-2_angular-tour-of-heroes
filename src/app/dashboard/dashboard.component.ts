/**
 * Created by StefanE on 29.05.2017.
 */
import {Component, OnInit} from '@angular/core';

import {Hero} from '../hero';
import {HeroService} from '../services/hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.orderHeroes(heroes));
  }

  orderHeroes(heroes: Hero[]): void {
    heroes.sort((a: Hero, b: Hero) => {
      if (a.victories > b.victories) {
        return -1;
      } else if (a.victories < b.victories) {
        return 1;
      } else {
        return 0;
      }
    });
    this.heroes = heroes.slice(0, 4);
  }
}
