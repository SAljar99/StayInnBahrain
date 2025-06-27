const { Flat } = require('../models')

//  Get all flats in a branch
const GetFlatsByBranch = async (req, res) => {
  try {
    const flats = await Flat.find({ branchId: req.params.branch_id })
    res.status(200).send(flats)
  } catch (error) {
    res.status(500).send({ msg: 'Error fetching flats', error })
  }
}

//  Get a flat by ID (for detail view)
const GetFlatById = async (req, res) => {
  try {
    const flat = await Flat.findById(req.params.flat_id)
    res.status(200).send(flat)
  } catch (error) {
    res.status(500).send({ msg: 'Error fetching flat', error })
  }
}

//  Filter available flats by date range
const FilterAvailableFlats = async (req, res) => {
  try {
    const { startDate, endDate } = req.body
    const flats = await Flat.find({
      isRented: false
      // Optionally add date-based filtering if Booking logic is expanded
    })
    res.status(200).send(flats)
  } catch (error) {
    res.status(500).send({ msg: 'Error filtering flats', error })
  }
}

//  Admin: Create a flat
const CreateFlat = async (req, res) => {
  try {
    const flat = await Flat.create(req.body)
    res.status(201).send(flat)
  } catch (error) {
    res.status(400).send({ msg: 'Error creating flat', error })
  }
}

//  Admin: Update a flat
const UpdateFlat = async (req, res) => {
  try {
    const updated = await Flat.findByIdAndUpdate(req.params.flat_id, req.body, {
      new: true
    })
    res.status(200).send(updated)
  } catch (error) {
    res.status(400).send({ msg: 'Error updating flat', error })
  }
}

//  Admin: Delete a flat
const DeleteFlat = async (req, res) => {
  try {
    await Flat.findByIdAndDelete(req.params.flat_id)
    res.status(200).send({ msg: 'Flat deleted successfully' })
  } catch (error) {
    res.status(400).send({ msg: 'Error deleting flat', error })
  }
}

module.exports = {
  GetFlatsByBranch,
  GetFlatById,
  FilterAvailableFlats,
  CreateFlat,
  UpdateFlat,
  DeleteFlat
}
