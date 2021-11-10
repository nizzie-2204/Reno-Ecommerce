const User = require('../models/user.model')
var AES = require('crypto-js/aes')
const jwt = require('jsonwebtoken')

const createToken = ({ id, isAdmin }) => {
	return jwt.sign({ id, isAdmin }, process.env.JWT_SECRET, { expiresIn: '7d' })
}

const UserController = {
	register: async (req, res, next) => {
		try {
			// Encrypt password
			// const hashedPassword = AES.encrypt(
			// 	req.body.password,
			// 	process.env.PASSWORD_SECRET
			// ).toString()

			const newUser = await User(req.body)
			await newUser.save((error, user) => {
				if (error) {
					return next(error)
				}
				res.json({ message: 'Register successfully' })
			})
			// const token = createToken({ id: newUser._id, isAdmin: newUser.isAdmin })
		} catch (error) {
			next(error)
		}
	},
}

module.exports = UserController
