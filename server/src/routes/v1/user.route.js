const router = require('express').Router()
const { register } = require('../../controllers/user.controller')
// const { register } = require('../../controllers/user.controller')

router.post('/register', register)

module.exports = router
