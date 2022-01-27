var express = require('express');
var router = express.Router();
var designsCtrl = require('../controllers/designs');
var isLoggedIn = require('../config/auth');


router.get('/', designsCtrl.index);
router.get('/new', isLoggedIn, designsCtrl.new);
router.get('/mydesigns', isLoggedIn, designsCtrl.mydesigns);
router.get('/:id/edit', isLoggedIn, designsCtrl.edit);
router.put('/:id', isLoggedIn, designsCtrl.update);
router.get('/:id', designsCtrl.show);
router.post('/', isLoggedIn, designsCtrl.create);
router.delete('/:id', isLoggedIn,  designsCtrl.delete);






module.exports = router;