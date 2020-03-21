const Maps = require('../../src/models/Maps');

test('Maps instantiates properly', () => {
    maps = new Maps()
    expect(maps).toBeDefined();
    expect(maps).toBeInstanceOf(Maps)
});

test('Geocode function returns properly', async () => {
    maps = new Maps()
    result = await maps.geocode()
    expect(result['data']['results'][0]['formatted_address']).toBe("22 Main St, Charlestown, MA 02129, USA");
    
});

test('Distance function returns properly', async () => {
    maps = new Maps()
    result = await maps.distance("jurong", "changi")
    expect(result['data']['status']).toBe("OK");
    expect(result['data']['routes'][0]).toBeDefined();
    
});