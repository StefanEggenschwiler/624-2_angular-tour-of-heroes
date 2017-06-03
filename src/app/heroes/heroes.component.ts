/**
 * Created by StefanE on 29.05.2017.
 */
import {Component, OnInit} from '@angular/core';
import {Router}            from '@angular/router';

import {Hero}                from '../hero';
import {HeroService}         from '../services/hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService,
              private router: Router) {
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .then(heroes => {
        this.heroes = heroes;
        this.orderHeroes();
      });
  }

  add(name: string, strength: number): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.create(name, strength)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
        this.orderHeroes();
      });
  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) {
          this.selectedHero = null;
        }
      });
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  orderHeroes(): void {
    this.heroes.sort((a: Hero, b: Hero) => {
      if (a.strength < b.strength) {
        return 1;
      } else if (a.strength > b.strength) {
        return -1;
      } else {
        return 0;
      }
    });
  }
}
