const GrantsCalculatorInterface = require("./GrantsCalculatorInterface");

class BtoGrantsCalculator extends GrantsCalculatorInterface {
  constructor(incomeLevel, FTA, spouseFTA, employmentStatus) {
    super();
    this.incomeLevel = parseInt(incomeLevel);
    this.FTA = FTA;
    this.spouseFTA = spouseFTA;
    this.employmentStatus = employmentStatus;
  }

  calculateGrants() {
    if (this.employmentStatus === true) {
      if (this.FTA === true && this.spouseFTA === true) {
        if (this.incomeLevel > 9000) {
          return 0;
        } else if (this.incomeLevel < 1501) {
          return 80000;
        } else {
          return Math.floor((9500 - this.incomeLevel) / 500) * 5000;
        }
      } else if ((this.FTA === true) ^ (this.spouseFTA === true)) {
        if (this.incomeLevel / 2 > 4500) {
          return 0;
        } else if (this.incomeLevel / 2 < 751) {
          return 40000;
        } else {
          return Math.floor((4750 - this.incomeLevel / 2) / 250) * 2500;
        }
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  }
}

module.exports = BtoGrantsCalculator;
