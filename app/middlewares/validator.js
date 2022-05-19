// On passe validatorMiddleware dans une fonction, qui return validatorMiddleware.
// Ce qui permet de passer des paramètres, ici le schema à utiliser et l'origine des data qu'on récupère

const ApiError = require('../errors/apiError');

/**
 * Validation middleware with Joi
 * @param {Schema} schema Joi schema to validate data from user
 * @param {string} dataOrigin Request property to validate (body, query, params)
 * @returns {string} 400 error message
 */
const validator = (schema, dataOrigin) => {
  const validatorMiddleware = (req, res, next) => {
    // validate sur le request.body
    const { error } = schema.validate(req[dataOrigin]);
    // check la présence de la propriété error
    // si error, on renvoit au front un message
    if (error) {
      throw new ApiError(error.message, 400);
    }
    // sinon next()
    next();
  };
  return validatorMiddleware;
};

module.exports = validator;
