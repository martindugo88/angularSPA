import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html'
})
export class SearchResultsComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(private _heroesService:HeroesService,private activatedRoute:ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.heroes = this._heroesService.buscarHeroe( params['termino'] );
    })
  }

}
