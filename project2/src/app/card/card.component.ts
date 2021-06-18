import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public imgurl: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
  @Input() id!: number;
  @Input() name = '';
  @Input() type = '';
  @Input() exp!: number;
  @Input() total_experience!: number;



  constructor() { }

  ngOnInit(): void { };

  public ImageUrl() {
    let idx = `00${this.id}`.slice(-3);
    return `${this.imgurl}${idx}.png`;
  }

}
