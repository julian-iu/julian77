const express = require('express');
const router = express.Router();
const Conmedia = require('../controladores/Conmedia');

router.get('/', Conmedia.getAllMedia);
router.post('/', Conmedia.addmedia);
router.patch('/', Conmedia.upMedia);
router.delete('/', Conmedia.delMedia);

module.exports = router;