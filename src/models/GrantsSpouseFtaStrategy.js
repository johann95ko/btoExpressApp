const GrantsStrategy = require("./GrantsStrategyInterface");

class GrantsSpouseFtaStrategy extends GrantsStrategy {
    constructor (incomeLevel){
        super();
        this.incomeLevel = incomeLevel;
    }

    calculateGrants(){
        return Math.floor((9500 - this.incomeLevel) / 500) * 5000;
    }
}

module.exports = GrantsSpouseFtaStrategy;