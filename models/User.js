const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  fullName: { type: String, required: true },
  cprFront: { type: String, required: true },
  cprBack: { type: String, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  passwordDigest: { type: String, required: true }
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)
