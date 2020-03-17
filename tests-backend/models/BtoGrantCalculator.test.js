const BtoGrantCalculator = require('../../src/models/BtoGrantCalculator');

test('BtoGrantCalculator instantiates properly', () => {
    btoGrantCalculator = new BtoGrantCalculator()
    expect(btoGrantCalculator).toBeDefined();
    expect(btoGrantCalculator).toBeInstanceOf(BtoGrantCalculator)
});

test('BtoGrantCalculator instantiates properly with arguments', () => {
    btoGrantCalculator = new BtoGrantCalculator(8000,true,false);
    expect(btoGrantCalculator.incomeLevel).toBe(8000);
    expect(btoGrantCalculator.firstTimers).toBe(true);
    expect(btoGrantCalculator.employmentStatus).toBe(false);
});

test('BtoGrantCalculator calculates grant properly', () => {
    btoGrantCalculator_lowincome = new BtoGrantCalculator(1500,true,false);
    btoGrantCalculator_midincome = new BtoGrantCalculator(5000,true,false);
    btoGrantCalculator_highincome = new BtoGrantCalculator(9001,true,false);
    expect(btoGrantCalculator_lowincome.calculateGrant()).toBe(80000);
    expect(btoGrantCalculator_midincome.calculateGrant()).toBe(45000);
    expect(btoGrantCalculator_highincome.calculateGrant()).toBe(0);
});

// test('BtoGrantCalculator calculates grant properly', () => {
//     btoGrantCalculator = new BtoGrantCalculator(-500,true,false);
//     expect(btoGrantCalculator_lowincome.calculateGrant()).toThrow(error);
// });