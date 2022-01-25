const mongoose = require('mongoose');
// shortcut variable
const Schema = mongoose.Schema;

const imageSchema = new Schema({
	photoUrl: String,
	caption: String,
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
	images: [imageSchema]
}, {
	timestamps: true
});

module.exports = mongoose.model('Design', designSchema);