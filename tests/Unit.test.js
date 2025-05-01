const request = require('supertest');
const app = require('../app');

describe('Unit Tests', () => {
  it('GET /greet/:name returns correct greeting', async () => {
    const res = await request(app).get('/greet/Jakob');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello, Jakob!');
  });

  it('GET /status returns JSON with status and uptime', async () => {
    const res = await request(app).get('/status');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
    expect(typeof res.body.uptime).toBe('number');
  });
});
