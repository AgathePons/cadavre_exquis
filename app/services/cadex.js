const data = require('../../data/parts.json');

/**
 * return an integer between 0 and mx
 * @param {number} max number of elements in the table
 * @returns {number} random index for random element of the table
 */
const randomIndex = (max) => Math.floor(Math.random() * max);

const randomInList = (list) => list[randomIndex(list.length)];

const cadex = {
  randomName() {
    return randomInList(data.names);
  },
  randomAdjective() {
    return randomInList(data.adjectives);
  },
  randomVerb() {
    return randomInList(data.verbs);
  },
  randomComplement() {
    return randomInList(data.complements);
  },
  generate() {
    return {
      name: this.randomName(),
      adjective: this.randomAdjective(),
      verb: this.randomVerb(),
      complement: this.randomComplement(),
      glue() {
        return `${this.name} ${this.adjective} ${this.verb} ${this.complement}.`
      },
    };
  },
  add(update) {
    Object.keys(update).forEach((propName) => {
      // check si la clé rentrée au singulier correspond à une clé de data au pluriel
      if(data[`${propName}s`]) {
        // check si la valeur n'est pas déjà présente
        if(!data[`${propName}s`].includes[propName]) {
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
  randomInList
};
