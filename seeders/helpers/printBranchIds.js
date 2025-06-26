const db = require('../../db')
const { HotelBranch } = require('../models')

const printBranchIds = async () => {
  const branches = await HotelBranch.find()
  console.log('Branch IDs:')
  branches.forEach(b => console.log(`${b.name}: ${b._id}`))
  process.exit()
}

printBranchIds()
