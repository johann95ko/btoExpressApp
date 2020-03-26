const GrantsCalculatorInterface = require("./GrantsCalculatorInterface");

class GrantStrategy extends GrantsCalculatorInterface{
    constructor(incomeLevel, FTA, spouseFTA, employmentStatus, strategy){
        super();
        this.incomeLevel = parseInt(incomeLevel);
        this.FTA = FTA;
        this.spouseFTA = spouseFTA;
        this.employmentStatus = employmentStatus;
        this.strategy = strategy;
    }
    setStrategy(strategy){
        this.strategy = strategy;
    }
    calculateGrant(){
        this.strategy.calculateGrant();
    }
}


module.exports = GrantStrategy;
