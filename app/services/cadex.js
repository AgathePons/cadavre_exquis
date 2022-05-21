const debug = require('debug')('Cadex');
const data = require('../dataMapper');
const ApiError = require('../errors/apiError');

/**
 * return an integer between 0 and mx
 * @param {number} max number of elements in the table
 * @returns {number} random index for random element of the table
 */
const randomIndex = (max) => Math.floor(Math.random() * max);

/**
 * return a string : a word from an array of words (name, adjective, verb or complement)
 * @param {string[]} list array which contains the list of words (can be name, adjective, verb or complement)
 * @returns {string} the index value of the array (index which is a random number from randomIndex)
 */
const randomInList = (list) => list[randomIndex(list.length)];

const cadex = {
  /**
   * returns a random name from data source
   * @returns {string} a random name
   */
  async randomName() {
    const namesArray = await data.getAllNames();
    const randomName = randomInList(namesArray).label;
    debug('name :', randomName);
    return randomName;
  },
  /**
   * returns a random adjective from data source
   * @returns {string} a random adjective
   */
  async randomAdjective() {
    const adjectivesArray = await data.getAllAdjectives();
    const randomAdjective = randomInList(adjectivesArray).label;
    debug('adjective : ', randomAdjective);
    return randomAdjective;
  },
  /**
   * returns a random verb from data source
   * @returns {string} a random verb
   */
  async randomVerb() {
    const verbsArray = await data.getAllVerbs();
    const randomVerb = randomInList(verbsArray).label;
    debug('verb : ', randomVerb);
    return randomVerb;
  },
  /**
   * returns a random complement from data source
   * @returns {string} a random complement
   */
  async randomComplement() {
    const complementsArray = await data.getAllComplements();
    const randomComplement = randomInList(complementsArray).label;
    debug('complement : ', randomComplement);
    return randomComplement;
  },
  /**
   * generate the for words and give a method to glue them
   * @returns an object containing the 4 words of the cadex, and a method glue() which glues the words in a string
   */
  async generate() {
    debug('Génération du cadex');
    return {
      name: await this.randomName(),
      adjective: await this.randomAdjective(),
      verb: await this.randomVerb(),
      complement: await this.randomComplement(),
      /**
       * glue the chunks to create a string
       * @returns {string} cadex phrase
       */
      glue() {
        return `${this.name} ${this.adjective} ${this.verb} ${this.complement}.`;
      },
    };
  },
  /**
   * Adds user provided chunks to the data source
   * @param {object} update User inputs to add to data source
   */
  async add(update) {
    debug('Check data du formulaire dans bdd:', update);
    if (update.name === 'error') {
      throw new ApiError('Erreur de test', 404);
    }
    Object.keys(update).forEach(async (propName) => {
      // check si la valeur rentrée existe déjà en bdd
      debug(`prop: ${propName}, value: ${update[propName]}`);
      const newValue = await data.getOneValue(propName, update[propName]);
      if (!newValue) {
        debug(`new value to insert: ${propName} = ${update[propName]}`);
        await data.insertOneValue(propName, update[propName]);
      }
    });
  },
};

// on export randomIndex pour pouvoir la require dans le fichier de test
module.exports = {
  cadex,
  randomIndex,
  randomInList,
};
