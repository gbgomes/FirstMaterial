
import { Hero } from './hero';


import {Component} from '@angular/core';
import {MdSidenav} from '@angular/material';
import {Router} from '@angular/router';

import { MenuLateralComponent } from "./menu-lateral.component";

@Component
({
  moduleId: module.id,
  selector: 'my-app',
  template: `
  <md-sidenav-layout [class.m2app-dark]="isDarkTheme">

    <menu-lateral></menu-lateral>

	  <h1>{{title}}</h1>
	  <nav>
	    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    	<a routerLink="/heroes" routerLinkActive="active">Heroes</a>
	  </nav>
      <router-outlet></router-outlet>

     </md-sidenav-layout>
  `,
  styleUrls: [ 'app.component.css' ]
})

export class AppComponent
{ 
  title = 'Tour of Heroes';
}