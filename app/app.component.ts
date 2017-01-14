import { Component } from '@angular/core';

import { Hero } from './hero';


import {Component, ViewEncapsulation, ViewChild} from '@angular/core';
//import {DocumentationItems} from '../../shared/documentation-items/documentation-items';
import {MdSidenav} from '@angular/material';
import {Router} from '@angular/router';

const SMALL_WIDTH_BREAKPOINT = 840;


@Component
({
  moduleId: module.id,
  selector: 'my-app',
  template: `
<md-sidenav-layout class="docs-component-viewer-sidenav-container">
   <md-sidenav #sidenav class="docs-component-viewer-sidenav"
              [opened]="!isScreenSmall()"
              [mode]="isScreenSmall() ? 'over' : 'side'">
    Jolly good!
  </md-sidenav>

  <div class="example-sidenav-content">
    <button md-button (click)="sidenav.open()">
      Open sidenav
    </button>
  </div>



<div class="docs-component-sidenav-content"> 
	  <h1>{{title}}</h1>
	  <nav>
	    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    	<a routerLink="/heroes" routerLinkActive="active">Heroes</a>
	  </nav>
      <router-outlet></router-outlet>
</div>
     </md-sidenav-layout>
  `,
  styleUrls: [ 'app.component.css' ]
})

export class AppComponent
{ 
  title = 'Tour of Heroes';
  constructor(
              private _router: Router) {}

  @ViewChild(MdSidenav) sidenav: MdSidenav;

  ngOnInit() {
    this._router.events.subscribe(() => {
      if (this.isScreenSmall()) {
        this.sidenav.close();
      }
    });
  }

  isScreenSmall(): boolean {
    return window.matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`).matches;
  }
}