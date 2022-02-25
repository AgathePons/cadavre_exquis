const testJest = {
  sum(a, b) {
    return a + b;
  },
  string(myString) {
    return myString;
  },
  myObject: {
    objKey1: 'Hello',
    objKey2: 42,
    objKey3: true,
    objKey4: null,
    objKey5: undefined,
  },
};

module.exports = testJest;
