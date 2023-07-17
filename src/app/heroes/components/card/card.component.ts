import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  ngOnInit(): void {
    if( !this.hero ) throw new Error('Method not implemented.');
  }

  @Input()
  public hero!: Hero

}
