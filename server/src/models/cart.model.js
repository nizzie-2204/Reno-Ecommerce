const mongoose = require('mongoose')
const { Schema } = mongoose

const cartSchema = Schema(
	{
		userId: { type: Schema.Types.ObjectId, ref: 'User' },
		products: [
			{
				productId: { type: Schema.Types.ObjectId, ref: 'Product' },
				quantity: { type: Number, default: 1 },
			},
		],
	},
	{ timestamps: true }
)

const Cart = mongoose.model('Cart', cartSchema)
module.exports = Cart
