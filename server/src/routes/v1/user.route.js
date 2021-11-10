const router = require('express').Router()
const {
	update,
	detele,
	get,
	getAll,
	resetPassword,
	resetNewPassword,
} = require('../../controllers/user.controller')
const { verifyToken, verifyTokenAdmin } = require('../../middlewares/auth')

router
	.route('/users/:id')
	.get(verifyToken, get)
	.put(verifyToken, update)
	.delete(verifyToken, verifyTokenAdmin, detele)

router.route('/users').get(verifyToken, verifyTokenAdmin, getAll)
router.route('/users/password-reset').post(resetPassword)
router.route('/users/password-reset/:id/:token').post(resetNewPassword)
module.exports = router
