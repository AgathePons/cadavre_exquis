const { Router } = require('express');

const controller = require('./controllers/controller');

const router = Router();

router.get('/cadex', controller.getCadex);

module.exports = router;
