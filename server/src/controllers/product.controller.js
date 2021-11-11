const Product = require('../models/product.model')

exports.getAllProduct = async (req, res, next) => {
	try {
		// Pagination
		if (req.query.page) {
			const page = parseInt(req.query.page) || 1
			const pageSize = parseInt(req.query.limit) || 12
			const skip = (page - 1) * pageSize
			const total = await Product.countDocuments()
			const pages = Math.ceil(total / pageSize)

			if (page > pages) {
				const error = new Error('No page found')
				error.statusCode = 400
				return next(error)
			}

			const products = await Product.find()
				.skip(skip)
				.limit(pageSize)
				.populate('category')
				.populate('size')

			res.status(200).json({ count: products.length, page, pages, products })
		} else {
			const products = await Product.find()
				.populate('category')
				.populate('size')

			res.status(200).json({ products })
		}
	} catch (error) {
		next(error)
	}
}

exports.getProduct = async (req, res, next) => {
	try {
		const product = await Product.findById(req.params.id)
			.populate('category')
			.populate('size')

		res.status(200).json({ product })
	} catch (error) {
		next(error)
	}
}

exports.addProduct = async (req, res, next) => {
	try {
		const product = await Product.create(req.body)

		res.status(200).json({ product })
	} catch (error) {
		next(error)
	}
}

exports.updateProduct = async (req, res, next) => {
	try {
		const product = await Product.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{
				new: true,
				runValidators: true,
			}
		)

		res.status(200).json({ product })
	} catch (error) {
		next(error)
	}
}

exports.deleteProduct = async (req, res, next) => {
	try {
		await Product.findByIdAndDelete(req.params.id)

		res.status(200).json('Product has been deleted')
	} catch (error) {
		next(error)
	}
}
