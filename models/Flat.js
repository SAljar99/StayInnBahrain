const { Schema } = require("mongoose")

const flatSchema = new Schema(
  {
    number: { type: Number, required: true },
    type: { type: String, required: true },
    isRented: { type: Boolean, default: false },
    price: { type: Number, required: true },
    branchId: { type: Schema.Types.ObjectId, ref: "HotelBranch" },
    flatImages: [{ type: String }],
  },
  { timestamps: true }
)

module.exports = flatSchema
