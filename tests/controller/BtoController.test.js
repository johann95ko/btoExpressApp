const request = require('supertest')
const app = require('../../src/app')

test('BtoController should route properly', async () => {
    const res = await request(app)
    .get('/api/bto/')
    expect(res.statusCode).toEqual(200)
    expect(res.body[0]['Name']).toBeDefined
    
})

// test('BtoController should add properly', async () => {
//     const res = await request(app)
//     .post('/api/bto/add')
//     .send({
//         KeyName = "test",
//         Name = "test",
//         Address = "test",
//         MonthOfLaunch =  "January",
//         NumOfFlats = 11,
//         Type =  "test",
//         TypeOfFlats =  "test",
//         LatAndLng =  "test",
//         NearestMrt =  "test",
//         NearestMall =  "test",
//         NearestMarket =  "test",
//         ShortestDesc =  "test",
//         LongestDesc =  "test",
//         region =  "test",
//     })
    
//     expect(res.statusCode).toEqual(200)
//     // expect(res.body[0]['Name']).toBeDefined
    
// })