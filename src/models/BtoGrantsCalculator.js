const GrantsCalculatorInterface = require("./GrantsCalculatorInterface");

class BtoGrantsCalculator extends GrantsCalculatorInterface {
  constructor(incomeLevel, FTA, spouseFTA, employmentStatus) {
    super();
    this.incomeLevel = parseInt(incomeLevel);
    this.FTA = FTA;
    this.spouseFTA = spouseFTA;
    this.employmentStatus = employmentStatus;
  }

  FTGstrategy(income) {
    if (income > 9000) {
        return 0;
      } else if (income < 1501) {
        return 80000;
      } else {
        return Math.floor((9500 - income) / 500) * 5000;
      }
  }

  STGstrategy() {
    return 0;
  }

  FSTGstrategy(income){
    if (income / 2 > 4500) {
        return 0;
      } else if (income / 2 < 751) {
        return 40000;
      } else {
        return Math.floor((4750 - income / 2) / 250) * 2500;
      }
  }

  calculateGrants() {
    if (this.employmentStatus === true) {
      if (this.FTA === true && this.spouseFTA === true) {
        return FTGstrategy(this.incomeLevel);
      } else if ((this.FTA === true) ^ (this.spouseFTA === true)) {
        return SFTGstrategy(this.incomeLevel);
      } else {
        return STGstrategy();
      }
    } else {
      return 0;
    }
  }

  // calculateGrants() {
  //   if (this.employmentStatus === true) {
  //     if (this.FTA === true && this.spouseFTA === true) {
  //       if (this.incomeLevel > 9000) {
  //         return 0;
  //       } else if (this.incomeLevel < 1501) {
  //         return 80000;
  //       } else {
  //         return Math.floor((9500 - this.incomeLevel) / 500) * 5000;
  //       }
  //     } else if ((this.FTA === true) ^ (this.spouseFTA === true)) {
  //       if (this.incomeLevel / 2 > 4500) {
  //         return 0;
  //       } else if (this.incomeLevel / 2 < 751) {
  //         return 40000;
  //       } else {
  //         return Math.floor((4750 - this.incomeLevel / 2) / 250) * 2500;
  //       }
  //     } else {
  //       return 0;
  //     }
  //   } else {
  //     return 0;
  //   }
  // }

}

module.exports = BtoGrantsCalculator;
