const express = require('express')
const router = express.Router()
const {
	getAllProduct,
	getProduct,
	addProduct,
	updateProduct,
	deleteProduct,
} = require('../../controllers/product.controller')

const { verifyToken, verifyTokenAdmin } = require('../../middlewares/auth')

router
	.route('/products')
	.post(verifyToken, verifyTokenAdmin, addProduct)
	.get(verifyToken, getAllProduct)

router
	.route('/products/:id')
	.put(verifyToken, verifyTokenAdmin, updateProduct)
	.get(verifyToken, getProduct)
	.delete(verifyToken, verifyTokenAdmin, deleteProduct)

module.exports = router
