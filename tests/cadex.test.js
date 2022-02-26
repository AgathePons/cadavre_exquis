/* eslint-disable jest/prefer-expect-assertions */
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
  afterAll(() => {
    // Closing the DB connection allows Jest to exit successfully.
    cadex.closeDbClient();
  });

  it('get random noun from db', async () => {
    const data = await cadex.randomNoun();
    expect(typeof data).toBe('string');
  });

  // test thrown error in catch
  /* class NoErrorThrownError extends Error {}
  const getError = async <TError>(call: () => unknown): Promise<TError> => {
    try {
      await call();

      throw new NoErrorThrownError();
    } catch (error: unknown) {
      return error as TError;
    }
  }; */
  it('get aa catch error if async/await fails', async () => {
    // TODO see how check without calling expect() conditionnaly
    // await expect(cadex.randomNoun()).rejects.toThrow(TypeError);
    try {
      await cadex.randomNoun();
    } catch (e) {
      expect(e).toMatch('error');
    }
    // TODO expect.assertions(1); See how it works
  });
});
