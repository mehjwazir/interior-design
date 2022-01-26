var express = require('express');
var router = express.Router();
var designsCtrl = require('../controllers/designs');
// var isLoggedIn = require('../config/auth');


router.get('/', designsCtrl.index);
router.get('/new', designsCtrl.new);
router.get('/mydesigns', designsCtrl.mydesigns);
router.get('/:id', designsCtrl.show);
router.post('/', designsCtrl.create);
router.delete('/:id', designsCtrl.delete);




module.exports = router;