const { Schema } = require("mongoose")

const hotelBranchSchema = new Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    location: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = hotelBranchSchema
