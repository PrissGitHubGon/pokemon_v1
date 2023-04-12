import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { POKEMONS } from '../bdd/pokedex';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
pokemons = POKEMONS;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.pokemons = POKEMONS;

    let id = +this.route.snapshot.paramMap.getAll('id')
  }

}
