const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const { connectDB } = require('./src/configs/mongodb')
const { errorHandler } = require('./src/middlewares/errorHandler')
require('dotenv').config()

const userRouter = require('./src/routes/v1/user.route')

const app = express()
connectDB()

if (process.env.NODE_ENV !== 'production') {
	app.use(morgan('dev'))
}
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(
	fileUpload({
		useTempFiles: true,
	})
)

// Routes
app.use('/api/v1', userRouter)

// Error handle
app.use(errorHandler)

// Unhandled route
app.all('*', (req, res, next) => {
	const err = new Error('The route can not be found')
	err.statusCode = 404
	next(err)
})

const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`Listening: http://localhost:${port}`)
})
