const mongoose = require('mongoose')
const { Schema } = mongoose

const orderSchema = Schema(
	{
		userId: { type: Schema.Types.ObjectId, ref: 'User' },
		orderItems: [
			{
				productId: { type: Schema.Types.ObjectId, ref: 'Product' },
				quantity: { type: Number, default: 1 },
			},
		],
		shippingPrice: { type: Number },
		totalPrice: { type: Number },
		status: { type: String, default: 'pending' },
		address: { type: String },
	},
	{ timestamps: true }
)

const Order = mongoose.model('Order', orderSchema)
module.exports = Order
