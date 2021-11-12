const express = require('express')
const router = express.Router()
const { payment } = require('../../controllers/payment.controller')

const { verifyToken, verifyTokenAdmin } = require('../../middlewares/auth')

router.route('/payments').post(verifyToken, verifyTokenAdmin, payment)

module.exports = router
