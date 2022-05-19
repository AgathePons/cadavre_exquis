const { Router } = require('express');
const controller = require('../controllers/controller');
const validator = require('../middlewares/validator');
const schemaPost = require('../schemas/cadexPost');
const asyncMWWrapper = require('../middlewares/asyncMWWrapper');

const router = Router();

/**
 * GET /v1/cadex
 * @summary Retrieve a random cadex
 * @tags Cadex
 * @param {string} name.query custom name of the cadex
 * @param {string} adjective.query custom name of the cadex
 * @param {string} verb.query custom name of the cadex
 * @param {string} complement.query custom name of the cadex
 * @returns {string} 200 - the generated cadex
 */
router.get('/cadex', controller.getCadex);

/**
 * Expected object with custom chunks of phrase
 * @typedef {object} cadexPost
 * @property {string} name
 * @property {string} adjective
 * @property {string} verb
 * @property {string} complement
 */

/**
 * POST /v1/cadex
 * @summary Adds data to the data source and return new cadex with those datas
 * @tags Cadex
 * @param {cadexPost} request.body.required
 * @returns {string} 200 - the generated cadex
 * @returns {string} 400 - validation error message
 */
router.post('/cadex', validator(schemaPost, 'body'), controller.postCadex);

router.get('/test', asyncMWWrapper(controller.testCadex));

module.exports = router;
