const debug = require('debug')('Controller');
const ApiError = require('../errors/apiError');
const { cadex } = require('../services/cadex');

const controller = {
  /**
   *
   * @param {Request} req
   * @param {Response} res
   * @returns {string} 200 The full or partial random cadex
   */
  getCadex(req, res) {
    debug('Execution de getCadex avec en query string:', req.query);
    const cadexObject = cadex.generate();
    const copy = { ...cadexObject, ...req.query };
    return res.json(copy.glue()); // on doit return pour utiliser le résultat dans le test
  },
  /**
   * Adds data to the source and uses it to generate a partial random cadex
   * @param {Request} req
   * @param {Response} res
   * @returns {string} 200 The partial random cadex
   */
  postCadex(req, res) {
    debug('Execution de getCadex avec en body string:', req.body);
    const cadexObject = cadex.generate();
    debug('Cadex généré', cadexObject);
    cadex.add(req.body);
    const copy = { ...cadexObject, ...req.body };
    return res.json(copy.glue());
  },

  async testCadex(_req, _res, next) {
    next(new ApiError('Erreur fait exprès', 418));
  },
};

module.exports = controller;
