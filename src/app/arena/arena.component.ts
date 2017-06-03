/**
 * Created by StefanE on 29.05.2017.
 */
import {Component, OnInit}      from '@angular/core';

import 'rxjs/add/operator/switchMap';

import {Hero}        from '../hero';
import {HeroService} from '../services/hero.service';

@Component({
  selector: 'arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.css']
})
export class ArenaComponent implements OnInit {
  heroes: Hero[];
  hero1: Hero;
  hero2: Hero;
  winner: Hero;

  constructor(private heroService: HeroService) {
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .then(heroes => {
        this.heroes = heroes;
      });
  }

  updateWinner(hero: Hero): void {
    this.winner = hero;
    hero.victories += 1;
    this.heroService
      .update(hero).then();
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  fight(): void {
    if (this.hero1 === this.hero2) {
      return;
    }
    if (this.hero1.strength > this.hero2.strength) {
      this.updateWinner(this.hero1);
    } else {
      this.updateWinner(this.hero2);
    }
  }
}
