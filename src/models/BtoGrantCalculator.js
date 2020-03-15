const GrantCalculatorInterface = require("./GrantCalculatorInterface");

class BtoGrantCalculator extends GrantCalculatorInterface {
  constructor(incomeLevel, FTA, spouseFTA, employmentStatus) {
    super();
    this.incomeLevel = incomeLevel;
    this.FTA = FTA;
    this.spouseFTA = spouseFTA;
    this.employmentStatus = employmentStatus;
  }

  calulateGrant() {
    // if (this.FTA){
      if (this.incomeLevel > 9000) {
        return 0;
      } else if (this.incomeLevel < 1501) {
        return 80000;
      } else {
        return Math.floor((9500 - this.incomeLevel) / 500) * 5000;
      }      
    // } else {
    //   return 0;
    // }

  }
}

module.exports = BtoGrantCalculator;
