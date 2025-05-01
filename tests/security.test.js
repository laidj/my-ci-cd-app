const request = require('supertest');
const app = require('../app');

describe('Security Tests', () => {
  it('should sanitize malicious JSON input', async () => {
    const res = await request(app)
      .post('/data')
      .send({ payload: "<script>alert('xss')</script>" })
      .set('Content-Type', 'application/json');

    expect(res.statusCode).toBe(201);
    expect(res.body.data.payload).toContain('<script>');
  });

  it('should reject malformed JSON', async () => {
    const res = await request(app)
      .post('/data')
      .set('Content-Type', 'application/json')
      .send('{"badJson":');

    expect(res.statusCode).toBe(400); 
  });
});
