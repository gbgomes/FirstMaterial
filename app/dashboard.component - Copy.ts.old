import { Component, NgZone, ViewChild } from '@angular/core';

import {MdGridList}         from '@angular/material';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]
})
export class DashboardComponent
{
  heroes: Hero[] = [];

  //nCols = 2;

  constructor(
    private heroService: HeroService,
            ngZone:           NgZone)
  {
  /*
      window.onresize = (e) => {
        ngZone.run(() => {
        this.gridlist.cols = 5;
              if( window.innerWidth > 1024 )
              {
                this.gridlist.cols = 4;
              } else
              if( window.innerWidth > 640 && window.innerWidth <= 1024 )
              {
                this.gridlist.cols = 3;
              } else
              if( window.innerWidth > 480 && window.innerWidth <= 640 )
              {
                this.gridlist.cols = 2;
              } else
              if( window.innerWidth <= 480 )
              {
                this.gridlist.cols = 1;
              } 
              else
              {
                this.gridlist.cols = 4;
              }

        });
      };
    */  
   }

  ngOnInit(): void
  {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(0, 5));
//    this.gridlist.cols = 3;
  }

  //@ViewChild('gridlist') gridlist: MdGridList;
  //gridlist.cols = 5;
}
