const request = require('supertest');
const app = require('../app'); // This works since you export `app` in app.js

describe('GET /', () => {
  it('responds with Hello from Express!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello from Express!');
  });
});
