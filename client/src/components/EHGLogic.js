class EhgLogic{
    constructor(income){
        this.income = parseInt(income)
    }

    ehg(income) {
        if (income > 9000){
            return 0;
        } else if (income < 1501) {
            return 80000;
        } else {
           return Math.floor((9500 - income)/500)*5000
        }
    }
}

module.exports = EhgLogic;