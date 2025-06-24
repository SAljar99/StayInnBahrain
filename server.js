const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
// Middleware to parse URL-encoded data from forms (Body Parser)
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send(' Welcome to the Medappoint API!')
})
// Set the port to 3000
const port = process.env.PORT ? process.env.PORT : '3000'
mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`)
})
mongoose.connection.on('error', (err) => {
  console.error(' MongoDB connection error:', err)
})




//listen to port
app.listen(port, () => {
  console.log(`The express app is ready on port ${port}!`)
})