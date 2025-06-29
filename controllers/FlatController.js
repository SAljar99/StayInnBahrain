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

module.exports = {
  GetFlatsByBranch
}
