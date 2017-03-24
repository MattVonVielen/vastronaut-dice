import { Component } from '@angular/core';
import { DiceRoll } from './dice-roll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  num: number = 1;
  rollHistory: DiceRoll[] = [];

  roll() : void {
    this.rollHistory.unshift(new DiceRoll(this.num));
  }
}
