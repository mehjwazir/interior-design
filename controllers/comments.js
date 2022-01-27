const Movie = require('../models/design');

module.exports = {
  create,
  delete: deleteComment

};

function deleteComment(req, res) {
  Design.findOne({ 'comments.id': req.params.id, 'comments.user': req.user._id })
    .then(function (design) {
      if (!design) return res.redirect('/designs');
      design.comments.remove(req.params.id);
      return design.save();
    })
    .then(function (design) {
      res.redirect(`/designs/${design._id}`);
    });
}

function create(req, res) {
  Design.findById(req.params.id, function(err, designs) {
    // Add the user-centric info to req.body
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    // We can push in subdoc objects into Mongoose arrays
    design.reviews.push(req.body);
    design.save(function(err) {
      // Step 5: Respond with a redirect because we've mutated data
      res.redirect(`/designs/${design._id}`);
    });
  });
}