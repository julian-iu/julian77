const express = require('express');
const router = express.Router();
const Condirector = require('../controladores/Condirector');

router.get('/', Condirector.getAllDirectors);
router.post('/', Condirector.addDirector);
router.patch('/', Condirector.upDirectors);
router.delete('/', Condirector.delDirector);

module.exports = router;