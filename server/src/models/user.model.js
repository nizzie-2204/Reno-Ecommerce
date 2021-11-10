const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = Schema(
	{
		username: {
			type: String,
			require: [true, 'Username is required'],
			trim: true,
			minLength: 1,
		},
		password: {
			type: String,
			require: true,
			trim: true,
			minLength: [8, 'Password is at least 8 characters'],
		},
		email: { type: String, require: true, unique: true, trim: true },
		isAdmin: { type: Boolean, default: false },
		phone: { type: Number, require: true, trim: true },
		address: { type: String, require: true, trim: true },
	},
	{ timestamps: true }
)

const User = mongoose.model('User', userSchema)
module.exports = User
