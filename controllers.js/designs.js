const Designs = require('../models/design');

module.exports = {
  index,
  show,
  new: newDesign,
  create
};

function index(req, res) {
  Design.find({}, function (err, designs) {
    res.render('designs/index', { title: 'All Designs', design });
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
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  const design = new Design(req.body);
  design.save(function (err) {
    if (err) return res.redirect('/designs/new');
    res.redirect(`/designs/${design._id}`);
  });
}
