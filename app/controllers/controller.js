const { request } = require('express');
const {cadex} = require('../services/cadex');

const controller = {
  getCadex(req, res) {
    const cadexObject = cadex.generate();
    const copy = {...cadexObject, ...req.query};
    return res.json(copy.glue()); // on doit return pour utiliser le résultat dans le test
  },
  postCadex(req, res) {
    const cadexObject = cadex.generate();
    cadex.add(req.body);
    const copy = {...cadexObject, ...req.body};
    return res.json(copy.glue());
  },
};

module.exports = controller;
