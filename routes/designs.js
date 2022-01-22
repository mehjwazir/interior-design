var express = require('express');
var router = express.Router();
var burgersCtrl = require('../controllers/designs');
// var isLoggedIn = require('../config/auth');


router.get('/', designsCtrl.index);



module.exports = router;