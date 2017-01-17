
import { Hero } from './hero';

import { MenuItem } from './menuitem';
import { MenuItemService } from './menuitem.service';

import {Component, OnInit} from '@angular/core';
import {MdSidenav}         from '@angular/material';
import {Router}            from '@angular/router';

//import { MenuLateralComponent } from "./menu-lateral.component";

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

  constructor(
    private router: Router,
    private menuitemsService: MenuItemService) { }

  title = 'Tour of Heroes';


  getMenuItems(): void
  {
    this.menuitemsService.getMenuItems().then(menuitems => this.menuitems = menuitems);
  }

  ngOnInit(): void 
  {
    this.getMenuItems();
  }
}