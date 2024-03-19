const express = require('express');
const router = express.Router();
const Congenero = require('../controladores/Congenero');

router.get('/', Congenero.getAllGeneros);
router.post('/', Congenero.newGenero);
router.patch('/', Congenero.upDataG);
router.delete('/', Congenero.delDataG);

module.exports = router;