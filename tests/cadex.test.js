const {
  randomIndex,
  randomInList,
  cadex
} = require('../app/services/cadex');
const data = require('../data/parts.json');

// pour écrire un test, on utilise une fonction fournie par jest :
// - test(message, function)
// - it(message, function)

describe('Random number', () => {
  it('should return a number', () => {
    expect(typeof randomIndex(25)).toBe('number');
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
    // expect(randomIndex(max).toString()).not.toMatch(/\d+\.\d*/); // des chiffres . (un point) des chiffres
  });
});

describe('Data', () => {
  it('should be an object', () => {
    expect(data).toBeInstanceOf(Object);
  });
  it('should at least contain 4 properties (names, adjectives, verbs, complements)', () => {
    expect(data).toHaveProperty('names');
    expect(data).toHaveProperty('adjectives');
    expect(data).toHaveProperty('verbs');
    expect(data).toHaveProperty('complements');
  })
});

describe('Random element in a list', () => {
  it('should return a string', () => {
    expect(typeof randomInList(data.names)).toBe('string');
  });
  it('should return a string from the selected list', () => {
    const randomVerb = randomInList(data.verbs);
    expect(data.verbs).toContain(randomVerb);
  });
});

describe('Cadex service', () => {
  it('should allow access to random chunks', () => {
    expect(cadex).toHaveProperty('randomName');
    expect(cadex).toHaveProperty('randomAdjective');
    expect(cadex).toHaveProperty('randomVerb');
    expect(cadex).toHaveProperty('randomComplement');
  });
});

describe('Random name', () => {
  const name = cadex.randomName();
  it('should return a string', () => {
    expect(typeof name).toBe('string');
  });
  it('should return a random string from data.names', () => {
    expect(data.names).toContain(name);
  })
});

describe('Random adjective', () => {
  const adjective = cadex.randomAdjective();
  it('should return a string', () => {
    expect(typeof adjective).toBe('string');
  });
  it('should return a random string from data.adjectives', () => {
    expect(data.adjectives).toContain(adjective);
  })
});

describe('Random verb', () => {
  const verb = cadex.randomVerb();
  it('should return a string', () => {
    expect(typeof verb).toBe('string');
  });
  it('should return a random string from data.verbs', () => {
    expect(data.verbs).toContain(verb);
  })
});

describe('Random complement', () => {
  const complement = cadex.randomComplement();
  it('should return a string', () => {
    expect(typeof complement).toBe('string');
  });
  it('should return a random string from data.complements', () => {
    expect(data.complements).toContain(complement);
  })
});

describe('Generate', () => {
  const cadexObj = cadex.generate();
  it('should return an object', () => {
    expect(cadexObj).toBeInstanceOf(Object);
  });
  it('should have 5 properties', () => {
    expect(cadexObj).toHaveProperty('name');
    expect(cadexObj).toHaveProperty('adjective');
    expect(cadexObj).toHaveProperty('verb');
    expect(cadexObj).toHaveProperty('complement');
    expect(cadexObj).toHaveProperty('glue');
  });
  it('should have 4 strings and a function', () => {
    expect(typeof cadexObj.name).toBe('string');
    expect(typeof cadexObj.adjective).toBe('string');
    expect(typeof cadexObj.verb).toBe('string');
    expect(typeof cadexObj.complement).toBe('string');
    expect(typeof cadexObj.glue).toBe('function');
  });
  describe('Glue', () => {
    const phrase = cadexObj.glue();
    it('should return a string', () => {
        expect(typeof phrase).toBe('string');
    });

    it('should return a string containing all 4 chunks', () => {
      expect(phrase).toContain(cadexObj.name);
      expect(phrase).toContain(cadexObj.adjective);
      expect(phrase).toContain(cadexObj.verb);
      expect(phrase).toContain(cadexObj.complement);
    });
  });
});
