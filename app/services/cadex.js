const debug = require('debug')('Cadex');
const data = require('../../data/parts.json');
const ApiError = require('../errors/apiError');

/**
 * return an integer between 0 and mx
 * @param {number} max number of elements in the table
 * @returns {number} random index for random element of the table
 */
const randomIndex = (max) => Math.floor(Math.random() * max);

/**
 * return a string : a word from an array of words (noun, adjective, verb or complement)
 * @param {string[]} list array which contains the list of words (can be noun, adjective, verb or complement)
 * @returns {string} the index value of the array (index which is a random number from randomIndex)
 */
const randomInList = (list) => list[randomIndex(list.length)];

const cadex = {
  /**
   * returns a random name from data source
   * @returns {string} a random name
   */
  randomName() {
    return randomInList(data.names);
  },
  /**
   * returns a random adjective from data source
   * @returns {string} a random adjective
   */
  randomAdjective() {
    return randomInList(data.adjectives);
  },
  /**
   * returns a random verb from data source
   * @returns {string} a random verb
   */
  randomVerb() {
    return randomInList(data.verbs);
  },
  /**
   * returns a random complement from data source
   * @returns {string} a random complement
   */
  randomComplement() {
    return randomInList(data.complements);
  },
  /**
   * generate the for words and give a method to glue them
   * @returns an object containing the 4 words of the cadex, and a method glue() which glues the words in a string
   */
  generate() {
    debug('Génération du cadex');
    return {
      name: this.randomName(),
      adjective: this.randomAdjective(),
      verb: this.randomVerb(),
      complement: this.randomComplement(),
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
  add(update) {
    debug('Ajout de nouvelles data dans la source');
    if (update.name === 'error') {
      throw new ApiError('Erreur de test', 404);
    }
    Object.keys(update).forEach((propName) => {
      // check si la clé rentrée au singulier correspond à une clé de data au pluriel
      if (data[`${propName}s`]) {
        // check si la valeur n'est pas déjà présente
        if (!data[`${propName}s`].includes[propName]) {
          data[`${propName}s`].push(update[propName]);
        }
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
