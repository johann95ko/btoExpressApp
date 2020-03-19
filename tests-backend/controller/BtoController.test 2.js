const request = require('supertest')
const app = require('../../src/app')

test('BtoController should route properly', async () => {
    const res = await request(app)
    .get('/api/bto')
    expect(res.statusCode).toEqual(200)
    expect(res.body[0]['Name']).toBeDefined
    
})