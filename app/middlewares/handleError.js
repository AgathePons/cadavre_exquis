const debug = require('debug')('ErrorHandler');
const ApiError = require('../errors/apiError');
const logger = require('../helpers/logger');

/**
 * Error middleware
 */
// next est obligatoire même si pas utilisé
// express en a besoin pour faire la diff avec middlewares classiques (req, res, next)
// <= 3 : middleware classique
// == 4 : middleware de gestion d'erreur
// eslint-disable-next-line no-unused-vars
const handleError = (error, _req, response, _next) => {
  // on filtre les erreur à logger dans le fichier de log, on veut pas les 404
  if (!error.status || error.status !== 404) {
    logger.error(error);
  } else {
    debug(error);
  }
  // custom error
  if (error instanceof ApiError) {
    return response.status(error.status).json(error.message);
  }
  // other errors (probably tech) (code, sql, ...)
  return response.status(500).json('Internal server error');
};

module.exports = handleError;
