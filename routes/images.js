const express = require('express');
const router = express.Router();
const passport = require('passport');


const imagesCtrl = require('../controllers/images'); 

router.get('/images/:id/edit', imagesCtrl.edit);
router.post('/designs/:id/images', imagesCtrl.create);
router.put('/imagess/:id', imagesCtrl.update);
router.delete('/images/:id', imagesCtrl.delete);

module.exports = router;