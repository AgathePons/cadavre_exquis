require('dotenv').config();
const express = require('express');
const router = require('./app/router');

const app = express();

const port = process.env.PORT || 3000;

// on ajoute un préfixe aux routes de façon globale en l'indiquant lors de l'appel à app.use
// ce préfixe peut servir à versionner notre router dans le cas où on a besoin de le faire évoluer
// dans le router, on définira une route /cadex
// pour y accéder, on devra indiquer /v1/cadex
app.use('/v1', router);

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
