const mongoose = require('mongoose')
const { Schema } = mongoose

const categorySchema = Schema(
	{
		name: { typeo: String, require: true, trim: true },
	},
	{ timestamps: true }
)

const Category = mongoose.model('Category', categorySchema)
module.exports = Category
