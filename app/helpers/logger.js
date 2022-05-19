/**
 * Liste des niveaux de log
 *
 * "fatal" (60):
 *     The service/app is going to stop or
 *     become unusable now. An operator should definitely look into this soon.
 * "error" (50): Fatal for a particular request,
 *     but the service/app continues servicing other requests.
 *     An operator should look at this soon(ish).
 * "warn" (40):
 *     A note on something that should probably
 *     be looked at by an operator eventually.
 * "info" (30):
 *     Detail on regular operation.
 * "debug" (20):
 *     Anything else, i.e. too verbose to be included in "info" level.
 * "trace" (10):
 *     Logging from external libraries used by
 *     your app or very detailed application logging.
 */

const bunyan = require('bunyan');

// on prévoit la possibilité d'ajouter d'autres streams plus tard
const streams = [];

streams.push({
  level: 'error', // only error level
  path: './logs/error.log',
  type: 'rotating-file', // rotation de fichier, nouveau fichier après période définie
  period: '1d', // on conserve 1 fichier/j,
  count: 3, // et jusqu'à 3 fichiers (soit 3j d'historique)
});

const logger = bunyan.createLogger({
  name: 'Cadex API',
  streams,
});

module.exports = logger;
