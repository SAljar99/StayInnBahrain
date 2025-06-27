const router = require('express').Router()
const controller = require('../controllers/BookingController')
const middleware = require('../middleware')

// Create booking
router.post('/', middleware.stripToken, middleware.verifyToken, controller.CreateBooking)

// Get all bookings (admin only use case)
router.get('/', controller.GetAllBookings)

// Get bookings by user
router.get('/user/:user_id', middleware.stripToken, middleware.verifyToken, controller.GetBookingsByUser)

// Update a booking
router.put('/:booking_id', middleware.stripToken, middleware.verifyToken, controller.UpdateBooking)

// Delete (cancel) a booking
router.delete('/:booking_id', middleware.stripToken, middleware.verifyToken, controller.DeleteBooking)

module.exports = router
