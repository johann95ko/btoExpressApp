const GrantsStrategy = require("./GrantsStrategyInterface")

class GrantsSingleFtaStrategy extends GrantsStrategy {
    constructor (incomeLevel){
        super();
        this.incomeLevel = incomeLevel;
    }

    calculateGrants(){
        return Math.floor((4750 - this.incomeLevel / 2) / 250) * 2500;
    }

}
module.exports = GrantsSingleFtaStrategy;