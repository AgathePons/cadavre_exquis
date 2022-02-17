const controller = require('../app/controllers/controller');

const mockResponse = {
  json: jest.fn((data) => {
    return data; // on return pour l'utiliser, il faut répercuter cette modif dans la méthode
  }),
};

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
