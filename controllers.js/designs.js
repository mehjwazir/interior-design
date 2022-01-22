const Burger = require('../models/design');

module.exports = {
    index,
    show,


}

function index(req, res) {
    design.find({})
  .then(function(burgers) {
    res.render('designs/index', { title: 'All designs', designs });
  })
  .catch(function(err){
    res.redirect('/designs')
  });

}

function show(req, res) {

}