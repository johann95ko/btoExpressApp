const GrantsSingleFtaStrategy = require("./GrantsSingleFtaStrategy");
const GrantsCoupleFtaStrategy = require("./GrantsCoupleFtaStrategy");
const GrantsCalculatorInterface = require("./GrantsCalculatorInterface");

class BtoGrantsCalculator extends GrantsCalculatorInterface {
  constructor(incomeLevel, firstTimeApplication, spouseFTA, employmentStatus) {
    super();
    this.incomeLevel = parseInt(incomeLevel);
    this.firstTimeApplication = firstTimeApplication;
    this.spouseFTA = spouseFTA;
    this.employmentStatus = employmentStatus;
    this.grantStrategy;
  }

  calculateGrants() {
    if (this.incomeLevel < 0){throw new error("Income level cannot be negative")};
    if (this.employmentStatus === false){return 0};

    if (this.firstTimeApplication === true && this.spouseFTA === true) {
      if (this.incomeLevel > 9000) {return 0}; 
      if (this.incomeLevel < 1501) {return 80000}; 
      
      this.grantStrategy = new GrantsCoupleFtaStrategy(this.incomeLevel);
      return this.grantStrategy.calculateGrants();
    } 
      
    if ((this.firstTimeApplication === true) ^ (this.spouseFTA === true)) {
      if (this.incomeLevel / 2 > 4500) {return 0}; 
      if (this.incomeLevel / 2 < 751) {return 40000};
      
      this.grantStrategy = new GrantsSingleFtaStrategy(this.incomeLevel)
      return this.grantStrategy.calculateGrants();
    } 
 
    return 0;
  }
}

module.exports = BtoGrantsCalculator;
