
import './rxjs-extensions';

//import '~@angular/material/core/theming/prebuilt/deeppurple-amber.css';
//import 'hammerjs';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroDetailComponent }  from "./hero-detail.component";
import { HeroesComponent }      from './heroes.component';
import { HeroService }          from './hero.service';
import { HeroSearchComponent }  from "./hero-search.component";
import { MenuLateralComponent } from "./menu-lateral.component";

import { AppRoutingModule }    from './app-routing.module';

//Material
import { MaterialModule } from '@angular/material';


// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


@NgModule({
  imports:[ BrowserModule, 
  				  FormsModule,
			      AppRoutingModule,
			      HttpModule,
    			  InMemoryWebApiModule.forRoot(InMemoryDataService),
    			  MaterialModule.forRoot()
    			  //,Hammer
			    ],
  declarations: [ 
              AppComponent,
  			      DashboardComponent, 
  			      HeroesComponent, 
  			      HeroDetailComponent,
  			      HeroSearchComponent,
              MenuLateralComponent
  			    ],
  providers:    [ HeroService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

