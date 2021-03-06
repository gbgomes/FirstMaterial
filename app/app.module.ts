
import './rxjs-extensions';

//import '~@angular/material/core/theming/prebuilt/deeppurple-amber.css';
//import 'hammerjs';

import { NgModule }          from '@angular/core';
import { BrowserModule }     from '@angular/platform-browser';
import { FormsModule }       from '@angular/forms';
import { HttpModule }        from '@angular/http';

import { MaterialModule }      from '@angular/material';
import { FlexLayoutModule }    from "@angular/flex-layout";
import { MasonryModule }       from 'angular2-masonry';
import { NgxDatatableModule }  from '@swimlane/ngx-datatable';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroDetailComponent }  from "./hero-detail.component";
import { HeroesComponent }      from './heroes.component';
import { HeroSearchComponent }  from "./hero-search.component";
//import { MenuLateralComponent } from "./menu-lateral.component";

//Servicos
import { HeroService }     from './hero.service';
import { MenuItemService } from './menuitem.service';


@NgModule({
  imports:[ BrowserModule,
			FormsModule,
			AppRoutingModule,
			HttpModule,
			InMemoryWebApiModule.forRoot(InMemoryDataService),
			MaterialModule.forRoot(),
            MasonryModule,
            FlexLayoutModule.forRoot(),
			NgxDatatableModule
    			  //,Hammer
			],
  declarations: [ 
              AppComponent,
  			      DashboardComponent, 
  			      HeroesComponent, 
  			      HeroDetailComponent,
//              MenuLateralComponent,
  			      HeroSearchComponent
  			    ],
  providers:    [ HeroService, MenuItemService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

