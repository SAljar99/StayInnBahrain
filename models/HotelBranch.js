const { Schema, model } = require("mongoose")

const hotelBranchSchema = new Schema(
  {
    name: { type: String, required: true },
    adress: { type: Number, required: true },
    location: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = hotelBranchSchema
