const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

exports.payment = async (req, res, next) => {
	try {
		stripe.charges.create(
			{
				source: req.body.tokenPayment,
				amount: req.body.amount,
				currency: 'usd',
			},
			(error, res) => {
				if (error) {
					const err = new Error('Payment error')
					err.statusCode = 500
					return next(err)
				} else {
					res.status(200).json({ res })
				}
			}
		)
	} catch (error) {
		next(error)
	}
}
