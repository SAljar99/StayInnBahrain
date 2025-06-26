const mongoose = require('mongoose')
require('dotenv').config()

const { HotelBranch } = require('../models')

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.error('MongoDB connection error:', err))

const createBranches = async () => {
  const branches = [
    {
      name: '3900',
      address: 'Manama',
      location:
        'https://www.google.com/maps?daddr=26.2262420,50.5893060&saddr=26.1155269,50.4941939&dirflg=d&geocode=Fcd9jgEd8noCAw%3D%3D;FUIukAEdeu4DAw%3D%3D'
    },
    {
      name: 'Gold',
      address: 'Manama',
      location:
        'https://www.google.com/maps/dir//26.228588,50.589733/@26.2285645,50.5073315,12z/data=!4m5!4m4!1m0!1m1!4e1!3e0'
    },
    {
      name: 'HM',
      address: 'Manama',
      location:
        'https://www.google.com/maps/place/26%C2%B013\'37.9%22N+50%C2%B034\'59.6%22E/@26.2271944,50.5806473,17z'
    },
    {
      name: 'Cazino Park',
      address: 'Muharraq',
      location:
        'https://www.google.com/maps/place/26%C2%B015\'28.0%22N+50%C2%B036\'47.1%22E/@26.2577778,50.6105084,17z'
    },
    {
      name: 'Aljar cold store',
      address: 'Muharraq',
      location:
        'https://www.google.com/maps/place/26%C2%B015\'23.0%22N+50%C2%B036\'33.6%22E/@26.2430438,50.5431527,12.02z'
    }
  ]

  try {
    await HotelBranch.deleteMany({})
    console.log('Old branches deleted.')

    await HotelBranch.insertMany(branches)
    console.log('Branches created successfully.')
  } catch (err) {
    console.error('Error seeding branches:', err)
  } finally {
    mongoose.connection.close()
  }
}

createBranches()
