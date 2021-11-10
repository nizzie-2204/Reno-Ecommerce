const mongoose = require('mongoose')
const { Schema } = mongoose

const productSchema = Schema(
	{
		name: { type: String, require: true, unique: true, trim: true },
		desc: { type: String, require: true, unique: true, trim: true },
		categories: { type: Array },
		size: { type: String },
		color: { type: String },
		price: { type: Number, require: true },
		images: { type: Array },
	},
	{ timestamps: true }
)

const Product = mongoose.model('Product', productSchema)
module.exports = Product
