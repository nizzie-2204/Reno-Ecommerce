const router = require('express').Router()
const UserController = require('../../controllers/user.controller')
// const { register } = require('../../controllers/user.controller')

router.post('/register', UserController.register)

module.exports = router
