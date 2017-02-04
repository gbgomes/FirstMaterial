import { Component, ViewChild } from '@angular/core';
import {MdSidenav} from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'menu-lateral',
  templateUrl: 'menu-lateral.component.html',
  styleUrls: [ 'menu-lateral.component.css' ]
})
export class MenuLateralComponent
{

  @ViewChild('sidenav') el: MdSidenav;

  isScreenSmall(): boolean
  {
//    return window.matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`).matches;
	  return false;
  }


  toggle()
  {
  	this.el.toggle();
  }

/*
  items: MenuItens[] = [];

  constructor(private menuItensService: MenuItensService) { }

  ngOnInit(): void
  {
    this.menuItensService.get().then(items => this.items = items.slice(1, 5));
  }
  */
}
