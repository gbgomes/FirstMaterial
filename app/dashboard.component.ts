import { Component }             from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';


@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]
})
export class DashboardComponent
{
  heroes: Hero[] = [];
  selectedOption: string;
  dialogRef: MdDialogRef<HeroDetailComponent>;

  constructor( private heroService: HeroService,
               public dialog: MdDialog) { }

  ngOnInit(): void
  {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(0, 5));
  }

  openDialog(hero: Hero)
  {
    //this.dialog.hero = hero;
    this.dialogRef = this.dialog.open(HeroDetailComponent);
    this.dialogRef.componentInstance.hero = hero;
    //this.dialogRef.hero = hero;
    this.dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }
}
