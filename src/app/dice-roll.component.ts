import { Component, Input } from '@angular/core';
import { DiceRoll } from './dice-roll';

@Component({
  selector: 'dice-roll',
  templateUrl: './dice-roll.component.html',
  styleUrls: ['./dice-roll.component.scss']
})
export class DiceRollComponent {
  @Input() roll: DiceRoll;
  closed: boolean = true;
}
