const request = require('supertest')
const app = require('../../src/app')

test('MapsController should get geocode properly', async () => {
    const res = await request(app)
    .get('/api/map/geocode')
    expect(res.statusCode).toEqual(200)
    expect(res.text).toBeDefined
})

test('MapsController should get distance properly', async () => {
    const res = await request(app)
    .post('/api/map/distance')
    .send({
        originLoc:"changi",
        destinationLoc:"jurong"
    })

    expect(res.statusCode).toEqual(200)
    expect(res.text).toBe('["Jurong East, Singapore","35.3 km","33 mins"]')
})