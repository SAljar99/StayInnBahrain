const { Schema, model } = require('mongoose');

const bookingSchema = new Schema(
  {
    userID: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    flatID: { type: Schema.Types.ObjectId, ref: 'Flat', required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    isBooked: { type: Boolean, default: true }
  },
  { timestamps: true }
);

module.exports = model('Booking', bookingSchema);
