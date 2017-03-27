import { HostBinding, Component } from '@angular/core';
import { DiceRoll } from './dice-roll';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  num: number = 1;
  rollHistory: DiceRoll[] = [];
  @HostBinding('class') theme: string = 'brightest-eye';

  roll() : void {
    this.rollHistory.unshift(new DiceRoll(this.num));
  }

  changeTheme() : void {
    if (this.theme === 'peacekeep') {
      this.theme = 'brightest-eye';
    } else {
      this.theme = 'peacekeep';
    }
  }
}
