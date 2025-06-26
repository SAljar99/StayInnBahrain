const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const dotenv = require('dotenv')
const db = require('./db')
const AuthRouter = require('./routes/AuthRouter')
const FlatRouter = require('./routes/FlatRouter')


dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/auth', AuthRouter)
app.use('/flats', FlatRouter)

app.get('/', (req, res) => {
  res.send('StayInnBahrain API is running 🏨')
})

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`)
})
