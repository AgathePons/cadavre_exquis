const { sum, string, myObject } = require('./sum');

describe('i test JEST', () => {
  it('shoulb be 3', () => {
    expect.assertions(2);
    expect(typeof sum(1, 2)).toBe('number');
    expect(sum(1, 2)).toBe(3);
  });
  it('should be a string', () => {
    expect.assertions(1);
    expect(typeof string('hello')).toBe('string');
  });
});

describe('i test an object', () => {
  it('should be an object with 5 properties', () => {
    expect.assertions(2);
    expect(typeof myObject).toBe('object');
    expect(Object.keys(myObject)).toHaveLength(5);
  });
  it('should be a string saying Hello', () => {
    expect.assertions(3);
    expect(myObject.objKey1).toBe('Hello');
    expect(myObject.objKey2).toBeGreaterThan(41);
    expect(myObject.objKey2).toBeLessThan(43);
  });
});
