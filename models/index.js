const mongoose = require('mongoose')
const User = require('./User');
const HotelBranch = require('./HotelBranch');
const Flat = require('./Flat');
const Booking = require('./Booking');

const User = mongoose.model('User', userSchema)
const HotelBranch = mongoose.model('HotelBranch', hotelBranchSchema)
const Flat = mongoose.model('Flat', flatSchema)
const Booking = mongoose.model('Booking', bookingSchema)


module.exports = {
  User,
  HotelBranch,
  Flat,
  Booking
};
