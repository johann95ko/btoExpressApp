const request = require('supertest')
const app = require('../../src/app')
var test_id;

test('LoginController should register properly', async () => {
    const res = await request(app)
    .post('/api/login/register')
    .send({
        name: "test_user_p",
        email: "tst_0za@ul.com",
        password: "ZQW0xcbnzz",
        password2: "ZQW0xcbnzz"
    })
    expect(res.statusCode).toEqual(200)
    expect(res.text).toBe("\"user registration successful\"")
})

test('LoginController should read properly', async () => {
    const res = await request(app)
    .get('/api/login/')
    var x;
    //This code is used for the delete test below
    for (x in res.body){
        if (res.body[x]["name"] == "test_user_p"){
            test_id = res.body[x]["_id"]
        }
    }
    expect(res.statusCode).toEqual(200) 
    expect(res.body).toBeDefined()
})

test('LoginController should verify properly', async () => {
    const res = await request(app)
    .post('/api/login/verify')
    .send({
        username: "test_user_p",
        password: "ZQW0xcbnzz",
    })
    expect(res.statusCode).toEqual(200)
})

test('LoginController should delete properly', async () => {
    const res = await request(app)
    .delete('/api/login/delete/' + test_id)
    expect(res.statusCode).toEqual(200)  
    expect(res.text).toBe('"User deleted."')  
})