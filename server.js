const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const AuthRouter = require('./routes/AuthRouter')

const app = express()

// Middleware
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// DB connection
mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB: ${mongoose.connection.name}`)
})
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err)
})

// Routes
app.use('/auth', AuthRouter)

app.get('/', (req, res) => {
  res.send('Welcome to StayInnBahrain API')
})

// Server
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT} 🚀`)
})
