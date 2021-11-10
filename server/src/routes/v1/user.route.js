const router = require('express').Router()
const {
	update,
	detele,
	get,
	getAll,
} = require('../../controllers/user.controller')
const { verifyToken, verifyTokenAdmin } = require('../../middlewares/auth')

router
	.route('/users/:id')
	.get(verifyToken, get)
	.put(verifyToken, update)
	.delete(verifyToken, verifyTokenAdmin, detele)

router.route('/users').get(verifyToken, verifyTokenAdmin, getAll)

module.exports = router
