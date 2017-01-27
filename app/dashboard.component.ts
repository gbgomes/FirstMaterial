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

  constructor( private heroService: HeroService,
               public dialog: MdDialog) { }

  ngOnInit(): void
  {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(0, 5));
  }

  openDialog() {
    let dialogRef = this.dialog.open(HeroDetailComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }
}
