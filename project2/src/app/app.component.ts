import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'POKEMON DEX';
  public total_experience1!: number;
  public total_experience2!: number;
  public data = {
    items:
      [
        { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
        { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
        { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
        { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
        { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
        { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
        { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
        { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
      ]
  };

  public result: any[] = [];
  public arr2: any[] = [];
  ngOnInit() {
    this.challengePokedex();
    this.winnerPokeDex();
  }
  public challengePokedex() {
    this.arr2 = [...this.data.items];
    while (this.result.length < this.arr2.length) {
      let idx = Math.floor(Math.random() * this.arr2.length);
      let val = this.arr2.splice(idx, 1)[0];
      this.result.push(val);
    };
    return this.result;
  };

  public winnerPokeDex() {
    let exp1 = this.result.reduce((acc, val) => acc + val.base_experience, 0);
    let exp2 = this.arr2.reduce((acc, val) => acc + val.base_experience, 0);
    this.total_experience1 = exp1;
    this.total_experience2 = exp2;
  };
}
