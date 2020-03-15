const GrantCalculatorInterface = require("./GrantCalculatorInterface");

class BtoGrantCalculator extends GrantCalculatorInterface {
  constructor(incomeLevel, firstTimers, employmentStatus) {
    super();
    this.incomeLevel = parseInt(incomeLevel);
    this.firstTimers = firstTimers;
    this.employmentStatus = employmentStatus;
  }

  calulateGrant() {
    if (this.incomeLevel > 9000) {
      return 0;
    } else if (this.incomeLevel < 1501) {
      return 80000;
    } else {
      return Math.floor((9500 - this.incomeLevel) / 500) * 5000;
    }
  }
}

module.exports = BtoGrantCalculator;
