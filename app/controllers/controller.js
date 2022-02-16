const {cadex} = require('../services/cadex');

const controller = {
  getCadex(_req, res) {
    const cadexObject = cadex.generate();
    res.json(cadexObject.glue());
  },
};

module.exports = controller;
