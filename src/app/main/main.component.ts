import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../bdd/pokedex';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
pokemons = POKEMONS;// retourne notre constante POKEMONS contenant touts nos pokemons
  constructor() { }

  ngOnInit(): void {
  }

}
