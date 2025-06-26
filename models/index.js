const mongoose = require('mongoose')
const userSchema = require('./User')
const hotelBranchSchema = require('./HotelBranch')
const flatSchema = require('./Flat')
const bookingSchema = require('./Booking')

const User = mongoose.model('User', userSchema)
const HotelBranch = mongoose.model('HotelBranch', hotelBranchSchema)
const Flat = mongoose.model('Flat', flatSchema)
const Booking = mongoose.model('Booking', bookingSchema)

module.exports = {
  User,
  HotelBranch,
  Flat,
  Booking
}

