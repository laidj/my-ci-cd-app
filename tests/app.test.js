const request = require('supertest');
const app = require('../app'); // make sure the path is correct

describe('GET /', () => {
  it('responds with Hello from Express!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello from Express!');
  });
});
