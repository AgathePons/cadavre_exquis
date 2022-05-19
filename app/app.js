const express = require('express');
const router = require('./routers');

const app = express();

require('./helpers/docHelper')(app);

// Attention, quand on utilise un chemin relatif, le point de départ
// est le dossier racine, pas forcément le dossier où se trouve le fichier courant
app.use(express.static('./public'));

// express.urlencoded : name=xxx&complement=yyy
// express.json : '{ "name": "xxx", "complement": "yyy"}'
app.use(express.json());

// on ajoute un préfixe aux routes de façon globale en l'indiquant lors de l'appel à app.use
// ce préfixe peut servir à versionner notre router dans le cas où on a besoin de le faire évoluer
// dans le router, on définira une route /cadex
// pour y accéder, on devra indiquer /v1/cadex
app.use(router);

module.exports = app;
