const Design = require('../models/design');

module.exports = {
  index,
  show,
  new: newDesign,
  create
};

function index(req, res) {
  Design.find({}, function (err, designs) {
    res.render('designs/index', { title: 'All Designs', designs });
  });
}

function show(req, res) {
  Design.findById(req.params.id, function (err, design) {
    res.render('designs/show', { title: 'Designs', design, });
  });
}

function newDesign(req, res) {
  res.render('designs/new', { title: 'Add Design' });
}

function create(req, res) {
  const design = new Design(req.body);
  design.user = req.user._id;  
  design.save(function (err) {
    if (err) return res.redirect('/designs/new');
    res.redirect(`/designs/${design._id}`);
  });
}
