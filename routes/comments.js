const express = require('express');
const router = express.Router();
// Require the yet to be created reviews controller
const reviewsCtrl = require('../controllers/comments');

// Define the Route to create a review
// POST /comments/:id/reviews
router.post('/designs/:id/comments', commentsCtrl.create);
// DELETE /comments/:id
router.delete('/comments/:id', commentsCtrl.delete);

module.exports = router;