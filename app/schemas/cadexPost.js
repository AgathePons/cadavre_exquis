const Joi = require('joi');

/**
 * Schema to validate user inputs to add to data source
 */
const schema = Joi.object({
  name: Joi.string(),
  adjective: Joi.string(),
  verb: Joi.string(),
  complement: Joi.string(),
}).required().min(1).max(4);

module.exports = schema;
