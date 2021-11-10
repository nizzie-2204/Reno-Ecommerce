const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = Schema(
	{
		username: {
			type: String,
			required: true,
			trim: true,
		},
		password: {
			type: String,
			required: true,
			trim: true,
			minLength: 8,
		},
		email: { type: String, required: true, unique: true, trim: true },
		isAdmin: { type: Boolean, default: false },
		phone: { type: Number, required: true, trim: true },
		address: { type: String, required: true, trim: true },
	},
	{ timestamps: true }
)

const User = mongoose.model('User', userSchema)
module.exports = User
