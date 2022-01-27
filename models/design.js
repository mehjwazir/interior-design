const mongoose = require('mongoose');
// shortcut variable
const Schema = mongoose.Schema;

const commentSchema = new Schema({
	content: String,
	user: { type: Schema.Types.ObjectId, ref: 'User' },
	userName: String,
  userAvatar: String
}, {
	timestamps: true
});

const designSchema = new Schema({
	user: { type: Schema.Types.ObjectId, ref: 'User' },
	userName: String,
	userAvatar: String,
	title: {
		type: String,
		required: true
	},
	style: {
		type: String,
		enum: ['Modern', 'Japandi', 'California', 'Minimal', 'Bohemian', 'Mid-Century', 'Other']
	},
	images: {
	type: String,
},
	comments: [commentSchema]
}, {
	timestamps: true
});

module.exports = mongoose.model('Design', designSchema);