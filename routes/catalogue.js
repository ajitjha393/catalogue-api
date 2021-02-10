const { Router } = require('express');

const { getCatalogues } = require('../controllers/catalogue');

const router = Router();

router.get('/list', getCatalogues);

module.exports = router;
