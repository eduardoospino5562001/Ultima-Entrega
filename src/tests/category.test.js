const request = require('supertest')
const app = require('../app')

const BASE_URL = '/api/v1/categories'

let TOKEN

beforeAll(async() => {
    const user = {
        email: 'edaurdo@gmail.com',
        password:'0123454'
    }

    const res = await request(app)
    .post('/api/v1/users/login')
    .send(user)

    TOKEN = res.body.token
})

test("POST 'BASE_URL', should return statusCode 201, and res.body.name === category.name ",async() =>{
    const category = {
        name: "Tecno"
    }

    const res = await request(app)
    .post(BASE_URL)
    .send(category)
    .set("Authorization", `Bearer ${TOKEN}`)

    expect(res.status).toBe(201)
    expect(res.body).toBeDefined()
    expect(res.body.name).toBe(category.name)
    
})

