const { HotelBranch } = require('../models');


const GetAllBranches = async (req, res) => {
  try {
    const branches = await HotelBranch.find();
    res.status(200).json(branches);
  } catch (err) {
    res.status(500).json({ msg: 'Error fetching branches', err });
  }
};

module.exports = {
  GetAllBranches
};
