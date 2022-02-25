const { cadex } = require('../services/cadex');

const controller = {
  async getCadex(_req, res) {
    const nouns = await cadex.randomNoun();
    if (nouns) {
      console.log('getCadex:', nouns);
    }
    return res.json(nouns);
  },
};

module.exports = controller;
