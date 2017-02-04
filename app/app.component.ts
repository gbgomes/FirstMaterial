
import { Hero } from './hero';

import { MenuItem } from './menuitem';
import { MenuItemService } from './menuitem.service';

import {Component, OnInit, NgZone, ViewChild} from '@angular/core';

import {MdSidenav}              from '@angular/material';
import {Router, NavigationEnd}  from '@angular/router';

import { NgxDatatableModule }  from '@swimlane/ngx-datatable';

//import { MenuLateralComponent } from "./menu-lateral.component";

import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/Rx";

const windowSize$ = new BehaviorSubject(getWindowSize());

function getWindowSize()
{
  return window.innerWidth;
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
  bMostraFAB = false;

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
                this.sidenav.mode = "over";
                this.smallscreen = true;
              } 
              else
              {
                this.sidenav.open();
                this.sidenav.mode = "side";
                this.smallscreen = false;
              }

        });
      };
   }

  @ViewChild('sidenav') sidenav: MdSidenav;
  @ViewChild('teste') teste: NgxDatatableModule;

  getMenuItems(): void
  {
    this.menuitemsService.getMenuItems().then(menuitems => this.menuitems = menuitems);
  }

  ngOnInit(): void 
  {
    this.getMenuItems();

    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          console.log('NavigationEnd:', event);
          console.log(this.teste);
        }
      });
  }


}