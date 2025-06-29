const { HotelBranch } = require("../models")

const GetAllBranches = async (req, res) => {
  try {
    const { city } = req.query
    const query = city
      ? { address: { $regex: new RegExp(`^${city}$`, "i") } }
      : {}

    const branches = await HotelBranch.find(query)
    res.json(branches)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Failed to fetch hotel branches" })
  }
}

module.exports = {
  GetAllBranches,
}
