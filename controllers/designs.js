const Design = require('../models/design');

module.exports = {
  index,
  show,
  new: newDesign,
  create,
  mydesigns,
  delete: deleteDesign,
  edit,
  update
};

function update(req, res) {
  Design.findOneAndUpdate(
    {_id: req.params.id, user: req.user._id},
    // update object with updated properties
    req.body,
    // options object with new: true to make sure updated doc is returned
    {new: true},
    function(err, design) {
      if (err || !design) return res.redirect('/designs');
      res.redirect(`/designs/${design._id}`);
    }
  );
}

function edit(req, res) {
  console.log('req.body', req.body);
  console.log('req.params',req.params.id);
  Design.findOne({ _id: req.params.id }, function (err, design) { 
    if (err || !design) return res.redirect('/designs');
    console.log(design);
    res.render('designs/edit', { title: 'Edit Design', design });

  })
}

function deleteDesign(req, res) {
  Design.findByIdAndDelete(req.params.id, function (design) {
    res.redirect('/designs/mydesigns')
  })

}

function mydesigns(req, res) {
  Design.find({user: req.user._id}, function (err, designs) {
    res.render('designs/mydesigns', { title: 'My Designs', designs });
  });
}
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
  if (req.body.link) design.images.push({ photoUrl: req.body.link })
  design.save(function (err) {
    if (err) return res.redirect('/designs/new');
    res.redirect(`/designs/${design._id}`);
  });
}
