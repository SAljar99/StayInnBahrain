const { Schema } = require("mongoose")

const hotelBranchSchema = new Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    location: { type: String, required: true },
    flats: [{ type: Schema.Types.ObjectId, ref: "Flat" }]
  },
  { timestamps: true }
)

module.exports =  hotelBranchSchema
