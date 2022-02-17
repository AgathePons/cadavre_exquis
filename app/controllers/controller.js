const { request } = require('express');
const {cadex} = require('../services/cadex');

const controller = {
  getCadex(req, res) {
    //!
    console.log(req.query);
    const cadexObject = cadex.generate();
    const copy = {...cadexObject, ...req.query};
    //!
    console.log(copy);
    return res.json(copy.glue()); // on doit return pour utiliser le résultat dans le test
  },
};

module.exports = controller;
