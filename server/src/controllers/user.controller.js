const User = require('../models/user.model')
var AES = require('crypto-js/aes')
const jwt = require('jsonwebtoken')

const createToken = ({ id, isAdmin }) => {
	return jwt.sign({ id, isAdmin }, process.env.JWT_SECRET, { expiresIn: '7d' })
}

exports.register = async (req, res, next) => {
	try {
		const user = await User.create(req.body)

		res.json({ message: 'Register successfully', user: user })
	} catch (error) {
		next(error)
	}
}

const UserController = {
	register: async (req, res, next) => {
		try {
			// Encrypt password
			// const hashedPassword = AES.encrypt(
			// 	req.body.password,
			// 	process.env.PASSWORD_SECRET
			// ).toString()

			const user = await User.create(req.body)

			res.json({ message: 'Register successfully', user: user })
			// const token = createToken({ id: newUser._id, isAdmin: newUser.isAdmin })
		} catch (error) {
			next(error)
		}
	},
}

// module.exports = UserController
