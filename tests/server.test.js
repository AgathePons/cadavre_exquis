const request = require('supertest'); // on simule un server au lieu de lancer le vrai serveur avec app.listen

const app = require('../app/app');

describe('GET /v1/cadex', () => {
  it('should send a non empty string', async () => {
    const response = await request(app).get('/v1/cadex');
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
});
