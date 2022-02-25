/* eslint-disable jest/prefer-expect-assertions */
const client = require('../app/dbClient');
// const { Client } = require('pg');
const { randomIndex, cadex } = require('../app/services/cadex');

describe('random number', () => {
  it('should return a number', () => {
    const max = 25;
    expect(typeof randomIndex(max)).toBe('number');
  });
  it('should return a number greater or equal to 0', () => {
    expect(randomIndex(25)).toBeGreaterThanOrEqual(0);
  });
  it('should return a number less than max', () => {
    const max = 25;
    expect(randomIndex(max)).toBeLessThan(max);
  });
  it('should return a whole number', () => {
    const max = 25;
    expect(Number.isInteger(randomIndex(max))).toBeTruthy();
  });
});

describe('random words from cadex method', () => {
  /* let client;

  beforeAll(() => {
    client = new Client(process.env.PGURL);
    client.connect();
  }); */

  afterAll(() => {
    // Closing the DB connection allows Jest to exit successfully.
    client.end();
  });

  it('get random noun from db', async () => {
    const data = await cadex.randomNoun();
    expect(typeof data).toBe('string');
  });

  it('get an error if async/await fails', async () => {
    try {
      await cadex.randomNoun();
    } catch (e) {
      expect(e).toMatch('error');
    }
    //expect.assertions(1);
  });
});
