const LocationCalculator = require('../../src/models/LocationCalculator');

test('LocationCalculator instantiates properly', () => {
    locationCalculator = new LocationCalculator()
    expect(locationCalculator).toBeDefined();
    expect(locationCalculator).toBeInstanceOf(LocationCalculator)
});