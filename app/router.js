const { Router } = require('express');

const controller = require('./controllers/controller');

const router = Router();

router.get('/cadex', controller.getCadex);
router.post('/cadex', controller.postCadex);

module.exports = router;
