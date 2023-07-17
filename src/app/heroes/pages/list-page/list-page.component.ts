import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  public heroes: Hero[] = []

  constructor( private heroService: HeroService) {

  }
  
  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(
      heroes => this.heroes = heroes
    )
  }

}
