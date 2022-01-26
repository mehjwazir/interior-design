var express = require('express');
var router = express.Router();
var passport = require('passport');
var Design = require('../models/design');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Designs' });
});



router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],

    prompt: 'select_account',
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/designs',
    failureRedirect: '/',
  } 
));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/')
});


module.exports = router;