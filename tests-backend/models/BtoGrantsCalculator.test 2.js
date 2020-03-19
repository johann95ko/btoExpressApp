const BtoGrantsCalculator = require('../../src/models/BtoGrantsCalculator');

test('BtoGrantsCalculator instantiates properly', () => {
    btoGrantsCalculator = new BtoGrantsCalculator()
    expect(btoGrantsCalculator).toBeDefined();
    expect(btoGrantsCalculator).toBeInstanceOf(BtoGrantsCalculator)
});

test('BtoGrantsCalculator instantiates properly with arguments', () => {
    btoGrantsCalculator = new BtoGrantsCalculator(8000,true,true,false);
    expect(btoGrantsCalculator.incomeLevel).toBe(8000);
    expect(btoGrantsCalculator.FTA).toBe(true);
    expect(btoGrantsCalculator.spouseFTA).toBe(true);
    expect(btoGrantsCalculator.employmentStatus).toBe(false);
});

test('BtoGrantsCalculator calculates Grants properly', () => {
    btoGrantsCalculator_lowincome = new BtoGrantsCalculator(1500,true,true,true);
    btoGrantsCalculator_midincome = new BtoGrantsCalculator(5000,true,true,true);
    btoGrantsCalculator_highincome = new BtoGrantsCalculator(9001,true,true,true);
    expect(btoGrantsCalculator_lowincome.calculateGrants()).toBe(80000);
    expect(btoGrantsCalculator_midincome.calculateGrants()).toBe(45000);
    expect(btoGrantsCalculator_highincome.calculateGrants()).toBe(0);
});

// test('BtoGrantsCalculator calculates Grants properly', () => {
//     btoGrantsCalculator = new BtoGrantsCalculator(-500,true,false);
//     expect(btoGrantsCalculator_lowincome.calculateGrants()).toThrow(error);
// });