import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { MdDialogRef }              from '@angular/material';

import { Hero } from './hero';

import 'rxjs/add/operator/switchMap';

import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
	selector: 'my-hero-detail',
    templateUrl: 'hero-detail.component.html',
    styleUrls: [ 'hero-detail.component.css' ]
})

export class HeroDetailComponent implements OnInit 
{
	@Input()
//	hero: Hero;
    hero = {id:1, name:'kkk'};

	constructor(
	  private heroService: HeroService,
	  private route:       ActivatedRoute,
	  private location:    Location,
	  public  dialogRef:   MdDialogRef<HeroDetailComponent>
	) {}

	ngOnInit(): void
	{
/*	
	  this.route.params
	    .switchMap((params: Params) => this.heroService.getHero(+params['id']))
	    .subscribe(hero => this.hero = hero);
*/	    
//	    this.heroService.getHero(0).subscribe(hero => this.hero = hero);
	}

	goBack(): void
	{
 	  this.location.back();
	}

	save(): void
	{
  		this.heroService.update(this.hero).then(() => this.goBack());
	}
}