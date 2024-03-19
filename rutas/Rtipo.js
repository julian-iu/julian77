const express = require('express');
const router = express.Router();
const Contipo = require('../controladores/Contipo');

router.post('/', Contipo.createTipo);
router.get('/', Contipo.getAllTipo);
router.patch('/',Contipo.upData);
router.delete('/',Contipo.delData);

module.exports = router;