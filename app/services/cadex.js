const data = require('../dataMapper');

/**
 * returns an integer between 0 and max
 * @param {number} max number of elements in an array
 * @returns random index for random element of the table
 */
const randomIndex = (max) => Math.floor(Math.random() * max);

/**
 * return a string : a word from an array of words (noun, adjective, verb or complement)
 * @param {string[]} list array which contains the list of words (can be noun, adjective, verb or complement)
 * @returns {string} the index value of the array (index which is a random number from randomIndex)
 */
const randomInList = (listArray) => listArray[randomIndex(randomIndex(listArray.length))].label;

const cadex = {
  async randomNoun() {
    const nounsArray = await data.getAllNouns();
    const randomNoun = randomInList(nounsArray);
    console.log('noun :', randomNoun);
  },
};

module.exports = { cadex, randomIndex, randomInList };
