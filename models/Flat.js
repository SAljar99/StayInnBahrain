const { Schema, model } = require('mongoose');

const flatSchema = new Schema(
  {
    number: { type: Number, required: true },
    type: { type: String, required: true },
    isRented: { type: Boolean, default: false },
    price: { type: Number, required: true },
    branchId: { type: Schema.Types.ObjectId, ref: 'HotelBranch', required: true },
    flatImages: [{ type: String }]
  },
  { timestamps: true }
);

module.exports = model('Flat', flatSchema);
