// On passe validatorMiddleware dans une fonction, qui return validatorMiddleware.
// Ce qui permet de passer des paramètres, ici le schema à utiliser et l'origine des data qu'on récupère
const validator = (schema, dataOrigin) => {
  const validatorMiddleware = (req, res, next) => {
    // validate sur le request.body
    const {error} = schema.validate(req[dataOrigin]);
    // check la présence de la propriété error
    // si error, on renvoit au front un message
    if(error) {
      return res.status(400).json(error.message);
    }
    // sinon next()
    next();
  };
  return validatorMiddleware;
};

module.exports = validator;
