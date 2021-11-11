const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = Schema(
	{
		fullName: {
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
		sex: { type: String, require: true, enum: ['Men', 'Women'] },
		dateOfBirth: { type: Date, require: true, default: Date.now() },
		avatar: { type: String },
		cart: [
			{
				productId: { type: Schema.Types.ObjectId, ref: 'Product' },
				quantity: { type: Number },
			},
		],
	},
	{ timestamps: true }
)

const User = mongoose.model('User', userSchema)
module.exports = User
