require('dotenv').config();
const express = require('express');
const router = require('./router');

const app = express();

app.use(express.static('./public'));

// express.urlencoded : name=xxx&complement=yyy
// express.json : '{ "name": "xxx", "complement": "yyy"}'
app.use(express.json());

// on ajoute un préfixe aux routes de façon globale en l'indiquant lors de l'appel à app.use
// ce préfixe peut servir à versionner notre router dans le cas où on a besoin de le faire évoluer
// dans le router, on définira une route /cadex
// pour y accéder, on devra indiquer /v1/cadex
app.use('/v1', router);

module.exports = app;
