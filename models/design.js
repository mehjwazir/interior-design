const mongoose = require('mongoose');
// shortcut variable
const Schema = mongoose.Schema;

const imageSchema = new Schema({
	user: { type: Schema.Types.ObjectId, ref: 'User' },
	photoUrl: String,
	caption: String,
	userName: String,
	userAvatar: String

}, {
	timestamps: true
});

const designSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	style: {
		type: String,
		enum: ['Modern', 'Japandi', 'California', 'Minimal', 'Bohemian', 'Mid-Century', 'Other']
	},
	images: [imageSchema]
}, {
	timestamps: true
});

module.exports = mongoose.model('Design', designSchema);