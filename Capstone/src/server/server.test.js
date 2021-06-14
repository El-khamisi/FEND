import 'regenerator-runtime/runtime'; //To defined regeneratorRuntime 


const supertest = require('supertest')
const app = require('./serverReq')
const request = supertest(app)



test('Testing receive json object As mock API response', async() => {
    const response = await request.get('/test')


    expect(response.body).toEqual({
        username: '5amisi',
        password: 'password'
    })


})