const { Flat } = require('../models')

const GetFlatsByBranch = async (req, res) => {
  try {
    const branchId = req.params.branchId
    const flats = await Flat.find({ branchId })
    res.json(flats)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch flats by branch' })
  }
}

const GetFlatById = async (req, res) => {
  try {
    const flat = await Flat.findById(req.params.flatId)
    if (!flat) return res.status(404).json({ message: 'Flat not found' })
    res.json(flat)
  } catch (err) {
    res.status(500).json({ error: 'Error fetching flat' })
  }
}

module.exports = {
  GetFlatsByBranch,
  GetFlatById
}
