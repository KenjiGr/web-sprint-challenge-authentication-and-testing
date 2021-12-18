// Write your tests here
const request = require('supertest');
const server = require('./server');
const db = require('../data/dbConfig');

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
})
afterAll(async () => {
  await db.destroy()
})

// it('is the correct env', () => {
//   expect(process.env.NODE_ENV).toBe('testing')
// })

test('sanity', () => {
  expect(true).toBe(true)
})

describe('auth-router', () => {
  describe('[POST] /register', () => {
    let res 
    beforeAll(async () => {
      res = await request(server).post('/api/auth/register').send({username: "mason", password: "1234"})
    })
    it('responds with a 201 created', async () => {
      expect(res.status).toBe(201)
    })
    it('responds with a created user', async () => {
      expect(res.body).toMatchObject({username: "mason"})
    })
  })
  describe('[POST] /login', () => {
    let res 
    beforeEach(async () => {
      res = await request(server).post('/api/auth/login').send({username: "mason", password: "1234"})
    })
    it('responds with a 200 okay', async () => {
      expect(res.status).toBe(200)
    })
    it('responds with login message', async () => {
      expect(res.body).toMatchObject({message: 'welcome, mason'})
    })
  })
})