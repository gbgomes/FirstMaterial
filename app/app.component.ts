import { Component } from '@angular/core';
import { Heroi } from 'app/heroi';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
  <h2>Meu heroi preferido é: {{meuHeroi.nome}}</h2>
  <ul>
  <li *ngFor="let heroi of herois">
  {{heroi.nome}}
  </li>
  </ul>
  <p *ngIf="herois.length > 3"> Muitos Herois!!!!</p>`
})
export class AppComponent  { 
	title = 'Lista de Herois';

  	herois = [ new Heroi(1,'SuperHomem'), new Heroi(2,'Batman'), new Heroi(3,'Home de Ferro'), new Heroi(4,'Mulher Maravilha')];

  	meuHeroi = this.herois[0];

}
