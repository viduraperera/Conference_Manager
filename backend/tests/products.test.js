import request from 'supertest';
import app from '../index.js';

describe('Get Product Endpoints', () => {
  it('should get products from the endpoint', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });
});

describe('Get category Endpoints', () => {
  it('should get categories from the endpoint', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });
});
