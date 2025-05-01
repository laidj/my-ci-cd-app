const request = require('supertest');
const app = require('../app');

describe('Integration Tests', () => {
  it('POST /data with JSON returns 201', async () => {
    const res = await request(app)
      .post('/data')
      .send({ message: 'Hello!' })
      .set('Content-Type', 'application/json');

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('message', 'Data received');
    expect(res.body).toHaveProperty('data');
  });

  it('POST /data with no body returns 400', async () => {
    const res = await request(app)
      .post('/data')
      .send({})
      .set('Content-Type', 'application/json');

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });

  it('GET /not-a-real-route returns 404', async () => {
    const res = await request(app).get('/not-a-real-route');
    expect(res.statusCode).toBe(404);
    expect(res.text).toBe('Not Found');
  });
});
