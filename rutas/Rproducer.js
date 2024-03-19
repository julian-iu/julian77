const express = require('express');
const router = express.Router();
const Conproductor = require('../controladores/Conproductor');

router.get('/', Conproductor.getAllProducers);
router.post('/', Conproductor.addProductora);
router.patch('/', Conproductor.upProducers);
router.delete('/', Conproductor.delProducers);

module.exports = router;
