const request = require('supertest')
const app = require('../../src/app')

test('GrantsController should route properly', async () => {
    const res = await request(app)
    .post('/api/grants/bto')
    .send({
        incomeLevel: 1500,
        firstTimeApplicant: true,
        spouseFirstTimeApplicant: true,
        employmentStatus: true
    })
    
    expect(res.statusCode).toEqual(200)
    expect(res.text).toBe("80000")   
})

