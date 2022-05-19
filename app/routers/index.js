const { Router } = require('express');
const ApiError = require('../errors/apiError');
const handleError = require('../middlewares/handleError');
const apiRouter = require('./apiRouter');

const router = Router();

router.use('/v1', apiRouter);

// gestion des erreurs : pour déclencher l'exécution d'un middleware
// à 4 paramètres (error, request, response, next) on a 2 solutions :
// - soit on throw une nouvelle erreur
// - soit on utilise next en lui passant une erreur en paramètre

/**
 * Middleware for inexisting routes
 */
router.use(() => {
  throw new ApiError('Endpoint not found', 404);
});

/**
 * Error middleware
 */
router.use(handleError);

module.exports = router;
