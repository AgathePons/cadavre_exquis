require('dotenv').config();
const express = require('express');
const expressJSDocSwagger = require('express-jsdoc-swagger');
const router = require('./router');

const options = {
  info: {
    version: '1.0.0',
    title: 'Cadex Generator',
    description: 'Génération d\'un cadex à partir de 4 morceaux de phrase aléatoires',
    license: {
      name: 'MIT',
    },
  },
  security: {
    BasicAuth: {
      type: 'http',
      scheme: 'basic',
    },
  },
  baseDir: __dirname,
  // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
  filesPattern: './**/*.js',
  // URL where SwaggerUI will be rendered
  swaggerUIPath: '/api-docs',
  // Expose OpenAPI UI
  exposeSwaggerUI: true,
  // Expose Open API JSON Docs documentation in `apiDocsPath` path.
  exposeApiDocs: false,
  // Open API JSON Docs endpoint.
  apiDocsPath: '/v3/api-docs',
  // Set non-required fields as nullable by default
  notRequiredAsNullable: false,
  // You can customize your UI options.
  // you can extend swagger-ui-express config. You can checkout an example of this
  // in the `example/configuration/swaggerOptions.js`
  swaggerUiOptions: {},
  // multiple option in case you want more that one instance
  multiple: true,
};

const app = express();

expressJSDocSwagger(app)(options);

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
