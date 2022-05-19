const {
  cadex
} = require('../app/services/cadex');
const controller = require('../app/controllers/controller');

const mockResponse = {
  json: jest.fn((data) => {
    return data; // on return pour l'utiliser, il faut répercuter cette modif dans la méthode
  }),
};

// 1ère façon, juste jestifier la méthode du module comme fait au-dessus
// cadex.generate = jest.fn(cadex.generate);

// 2ème
jest.mock('../app/services/cadex', () => {
  const originalModule = jest.requireActual('../app/services/cadex');
  return {
    ...originalModule,
    cadex: {
      ...originalModule.cadex,
      generate: jest.fn(() => ({
        glue: () => 'test',
      })),
    },
  };
});

let result;

describe('Get cadex', () => {
  /*
  existe aussi (à déclarer dans l'ordre):
  - beforeAll
  - beforeEach
  - 1er test
  - afterEach
  - beforeEach
  - 2e test
  - afterEach
  - afterAll
  */
  beforeAll(() => {
    result = controller.getCadex(null, mockResponse); // on met null à la place de la req car on en a pas besoin
  });
  it('should call cadex.generate', () => {

  });
  it('should call response.json', () => {
    expect(mockResponse.json).toHaveBeenCalled();
    expect(mockResponse.json).toHaveBeenCalledTimes(1);
    expect(mockResponse.json).toHaveBeenCalledWith(result);
  });
  it('should send a non empty string', () => {
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
  });
});
