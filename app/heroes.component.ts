import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component
({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: [ 'heroes.component.css' ]
})

export class HeroesComponent implements OnInit 
{ 
  heroes: Hero[];
  selectedHero: Hero;

  rows = [];
  count: number = 0;
  offset: number = 0;
  limit: number = 100;

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  ngOnInit(): void 
  {
    this.page( this.offset, this.limit );
  }

  page( offset: number, limit: number )
  {
    this.heroService.getHeroes( ).then(
      heroes => 
      {
        this.heroes = heroes

        this.count = this.heroes.length;

        const start = offset * limit;
        const end = start + limit;
        let rows = [...this.rows];

        for (let i = start; i < end; i++)
        {
          rows[i] = this.heroes[i];
        }

        this.rows = rows;
        //console.log('Page Results', start, end, rows);
      }
    );
  }

  onPage(event)
  {
    //console.log('Page Event', event);
    this.page(event.offset, event.limit);
  }

  getHeroes(): void
  {
    //this.heroService.getHeroes().then(heroes => this.heroes = heroes);

  }
  
  onSelect(hero: Hero): void 
  {
    this.selectedHero = hero;
  }

  gotoDetail(): void
  {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void
  {
    name = name.trim();

    if (!name) { return; }

    this.heroService.create(name)
      .then(hero =>
        {
          this.heroes.push(hero);
          this.selectedHero = null;
        });
  }

  delete(hero: Hero): void
  {
    this.heroService
      .delete(hero.id)
      .then(() =>
      {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
}
}
