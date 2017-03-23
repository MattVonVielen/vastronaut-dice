import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  num: number = 1;
  dice: Array<number> = [];
  counts: number[] = [];
  successes: number = 0;

  roll() : void {
    this.dice = [];
    this.counts = [0,0,0,0,0,0,0,0,0,0];

    for (let i = 0; i < this.num; i++) {
      let roll: number = Math.floor(Math.random() * 10) + 1;
      this.dice.push(roll);
      this.counts[roll-1] += 1;
    }
    this.successes = this.counts[6] + this.counts[7] + this.counts[8] + this.counts[9];
  }
}
