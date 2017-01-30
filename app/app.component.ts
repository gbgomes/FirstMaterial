
import { Hero } from './hero';

import { MenuItem } from './menuitem';
import { MenuItemService } from './menuitem.service';

import {Component, OnInit, NgZone, ViewChild} from '@angular/core';

import {MdSidenav}         from '@angular/material';
import {Router}            from '@angular/router';

//import { MenuLateralComponent } from "./menu-lateral.component";

import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/Rx";

const windowSize$ = new BehaviorSubject(getWindowSize());

function getWindowSize() {
  return window.innerWidth;
/*
  return {
    height: window.innerHeight,
    width: window.innerWidth
  };
  */
}


@Component
({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: [ 'app.component.css' ]
})

export class AppComponent implements OnInit
{ 
  menuitems: MenuItem[];
  smallscreen = false

  constructor(
    private router: Router,
    private menuitemsService: MenuItemService,
            ngZone:           NgZone)
  {
      window.onresize = (e) => {
        ngZone.run(() => {
              if( window.innerWidth < 1024 )
              {
                this.sidenav.close();
                this.smallscreen = true;
              } 
              else
              {
                this.sidenav.open();
                this.smallscreen = false;
              }

        });
      };
   }
//  title = 'Tour of Heroes';

  @ViewChild('sidenav') sidenav: MdSidenav;

  isScreenSmall(): boolean
  {
//    return window.matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`).matches;
    return false;
  }

  getMenuItems(): void
  {
    this.menuitemsService.getMenuItems().then(menuitems => this.menuitems = menuitems);
  }

  ngOnInit(): void 
  {
    this.getMenuItems();
  }
}