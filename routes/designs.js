var express = require('express');
var router = express.Router();
var designsCtrl = require('../controllers/designs');
// var isLoggedIn = require('../config/auth');


router.get('/', designsCtrl.index);
router.get('/new', designsCtrl.new);
router.get('/:id', designsCtrl.show);
router.post('/', designsCtrl.create);



module.exports = router;