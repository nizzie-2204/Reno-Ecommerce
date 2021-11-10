const User = require('../models/user.model')
var AES = require('crypto-js/aes')

exports.update = async (req, res, next) => {
	try {
		if (req.body.password) {
			req.body.password = AES.encrypt(
				req.body.password,
				process.env.PASS_SEC
			).toString()
		}

		const newUser = await User.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{
				new: true,
				runValidators: true,
			}
		).select('-password')

		res.status(200).json({ user: newUser })
	} catch (error) {
		next(error)
	}
}

exports.detele = async (req, res, next) => {
	try {
		await User.findByIdAndDelete(req.params.id)

		res.status(200).json('User has been deleted')
	} catch (error) {
		next(error)
	}
}

exports.getAll = async (req, res, next) => {
	try {
		const users = await User.find()

		res.status(200).json({ users })
	} catch (error) {
		next(error)
	}
}

exports.get = async (req, res, next) => {
	try {
		const user = await User.findById(req.params.id)

		res.status(200).json({ user })
	} catch (error) {
		next(error)
	}
}
