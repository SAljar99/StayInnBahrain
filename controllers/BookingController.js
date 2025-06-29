const { Booking, Flat } = require('../models')

//  Create a new booking
const CreateBooking = async (req, res) => {
  try {
    const userID = res.locals.payload.id; //  Securely get user ID from token
    const { flatID, startDate, endDate } = req.body;

    // Check if flat is already rented
    const flat = await Flat.findById(flatID)
    if (!flat || flat.isRented) {
      return res.status(400).json({ message: 'Flat is not available' })
    }

    const booking = await Booking.create({ userID, flatID, startDate, endDate });
    
    await Flat.findByIdAndUpdate(flatID, { isRented: true });

    res.status(201).send(booking);
  } catch (err) {
    res.status(500).send({ msg: 'Error creating booking', err });
  }
};

//  Get all bookings
const GetAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('userID flatID');
    res.status(200).send(bookings);
  } catch (err) {
    res.status(500).send({ msg: 'Error fetching bookings', err });
  }
};

//  Get bookings by user
const GetBookingsByUser = async (req, res) => {
  try {
    const userID = res.locals.payload.id;
    const bookings = await Booking.find({ userID }).populate('flatID');
    res.status(200).send(bookings);
  } catch (err) {
    res.status(500).send({ msg: 'Error fetching user bookings', err });
  }
};

//  Update booking
const UpdateBooking = async (req, res) => {
  try {
    const updated = await Booking.findByIdAndUpdate(req.params.booking_id, req.body, { new: true });
    res.status(200).send(updated);
  } catch (err) {
    res.status(500).send({ msg: 'Error updating booking', err });
  }
};

//  Cancel booking
const DeleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.booking_id);
    if (!booking) return res.status(404).send({ msg: 'Booking not found' });

    await Flat.findByIdAndUpdate(booking.flatID, { isRented: false });
    res.status(200).send({ msg: 'Booking canceled', booking });
  } catch (err) {
    res.status(500).send({ msg: 'Error deleting booking', err });
  }
};

module.exports = {
  CreateBooking,
  GetAllBookings,
  GetBookingsByUser,
  UpdateBooking,
  DeleteBooking
};
