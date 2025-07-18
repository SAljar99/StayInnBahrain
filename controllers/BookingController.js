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

const GetBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.booking_id)
    if (!booking) return res.status(404).send({ msg: 'Booking not found' })
    res.status(200).send(booking)
  } catch (err) {
    res.status(500).send({ msg: 'Error fetching booking', err })
  }
}

const getBookingsByUserId = async (req, res) => {
  try {
    const userId = req.params.id
    const bookings = await Booking.find({ userID: userId }).populate('flatID')
    res.status(200).json(bookings)
  } catch (err) {
    res.status(500).json({ error: 'Failed to get bookings' })
  }
}

//  Update booking
const UpdateBooking = async (req, res) => {
  try {
    const userID = res.locals.payload.id
    const booking = await Booking.findById(req.params.booking_id)

    if (!booking || booking.userID.toString() !== userID) {
      return res.status(403).send({ msg: 'Not authorized to update this booking' })
    }

    const updated = await Booking.findByIdAndUpdate(req.params.booking_id, req.body, { new: true })
    res.status(200).send(updated)
  } catch (err) {
    res.status(500).send({ msg: 'Error updating booking', err })
  }
}


//  Cancel booking
const DeleteBooking = async (req, res) => {
  try {
    const userID = res.locals.payload.id
    const booking = await Booking.findById(req.params.booking_id)

    if (!booking || booking.userID.toString() !== userID) {
      return res.status(403).send({ msg: 'Not authorized to delete this booking' })
    }

    await booking.deleteOne()
    await Flat.findByIdAndUpdate(booking.flatID, { isRented: false })
    res.status(200).send({ msg: 'Booking canceled', booking })
  } catch (err) {
    res.status(500).send({ msg: 'Error deleting booking', err })
  }
}


module.exports = {
  CreateBooking,
  GetAllBookings,
  GetBookingsByUser,
  GetBookingById,
  getBookingsByUserId,
  UpdateBooking,
  DeleteBooking
};
