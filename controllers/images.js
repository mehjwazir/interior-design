const Design = require('../models/design');

module.exports = {
  create,
  delete: deleteImage,
  edit,
  update,
};

function create(req, res) {
  Design.findById(req.params.id, function(err, design) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    
    design.images.push(req.body);
    design.save(function(err) {
      res.redirect(`/designs/${design._id}`);
    });
  });
}

async function deleteImage(req, res) {
  const game = await Design.findOne({'images._id': req.params.id});
 
  const image = design.image.id(req.params.id);
  if (!image.user.equals(req.user._id)) return res.redirect(`/designs/${design._id}`);
  image.remove();
  // Save the updated game
  await image.save();
  res.redirect(`/designs/${image._id}`);
}

  function edit(req, res){
    Design.findOne(
      {'images._id': req.params.id, 'images.user': req.user._id},
      function(err, game){
        if (!design || err) return res.redirect(`/designs/${design._id}`);
        let image = design.images.id(req.params.id);
        res.render('images/edit', {title: 'Edit', image });
      }
    )
  }

  function update(req, res) {
    Design.findOne({'images._id': req.params.id}, function(err, design) {
      const imageSubdoc = design.images.id(req.params.id);
      if (!imageSubdoc.user.equals(req.user._id)) return res.redirect(`/designs/${design._id}`);
      imageSubdoc.caption = req.body.caption;
      design.save(function(err) {
        res.redirect(`/designs/${design._id}`);
      });
    });
  }