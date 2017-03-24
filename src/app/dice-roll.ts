export class DiceRoll {
  num: number;
  dice: number[] = [];
  successes: number = 0;
  crits: number = 0;
  biffs: number = 0;
  total: number;
  when: Date;

  constructor(num: number) {
    this.num = num;
    this.when = new Date();

    for (let i = 0; i < this.num; i++) {
      let roll: number = Math.floor(Math.random() * 10) + 1;
      this.dice.push(roll);

      switch (roll) {
        case 1:
          this.biffs += 1;
          break;
        case 10:
          this.crits += 1;
          // Fall through to success case
        case 7:
        case 8:
        case 9:
          this.successes += 1;
          break;
      }
    }

    this.total = this.successes + this.crits - this.biffs;
  }
}
