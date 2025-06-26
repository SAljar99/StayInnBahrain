// seeders/flats.js
const db = require('../db')
const { Flat } = require('../models')

const flats = [
  // Branch: 3900 (Manama)
  {
    number: 101,
    type: 'bachelor',
    isRented: false,
    price: 350,
    branchId: '685d21b6b7d16c132a567eda',
    flatImages: ['https://picsum.photos/300/200?random=1']
  },
  {
    number: 102,
    type: 'family',
    isRented: true,
    price: 420,
    branchId: '685d21b6b7d16c132a567eda',
    flatImages: ['https://picsum.photos/300/200?random=2']
  },
  {
    number: 103,
    type: 'bachelor',
    isRented: false,
    price: 360,
    branchId: '685d21b6b7d16c132a567eda',
    flatImages: ['https://picsum.photos/300/200?random=3']
  },

  // Branch: Gold (Manama)
  {
    number: 201,
    type: 'family',
    isRented: false,
    price: 390,
    branchId: '685d21b6b7d16c132a567edb',
    flatImages: ['https://picsum.photos/300/200?random=4']
  },
  {
    number: 202,
    type: 'bachelor',
    isRented: true,
    price: 310,
    branchId: '685d21b6b7d16c132a567edb',
    flatImages: ['https://picsum.photos/300/200?random=5']
  },
  {
    number: 203,
    type: 'family',
    isRented: false,
    price: 400,
    branchId: '685d21b6b7d16c132a567edb',
    flatImages: ['https://picsum.photos/300/200?random=6']
  },

  // Branch: HM (Manama)
  {
    number: 301,
    type: 'bachelor',
    isRented: false,
    price: 320,
    branchId: '685d21b6b7d16c132a567edc',
    flatImages: ['https://picsum.photos/300/200?random=7']
  },
  {
    number: 302,
    type: 'family',
    isRented: true,
    price: 450,
    branchId: '685d21b6b7d16c132a567edc',
    flatImages: ['https://picsum.photos/300/200?random=8']
  },
  {
    number: 303,
    type: 'bachelor',
    isRented: false,
    price: 330,
    branchId: '685d21b6b7d16c132a567edc',
    flatImages: ['https://picsum.photos/300/200?random=9']
  },

  // Branch: Cazino Park (Muharraq)
  {
    number: 401,
    type: 'family',
    isRented: false,
    price: 410,
    branchId: '685d21b6b7d16c132a567edd',
    flatImages: ['https://picsum.photos/300/200?random=10']
  },
  {
    number: 402,
    type: 'bachelor',
    isRented: true,
    price: 300,
    branchId: '685d21b6b7d16c132a567edd',
    flatImages: ['https://picsum.photos/300/200?random=11']
  },
  {
    number: 403,
    type: 'family',
    isRented: false,
    price: 430,
    branchId: '685d21b6b7d16c132a567edd',
    flatImages: ['https://picsum.photos/300/200?random=12']
  },

  // Branch: Aljar Cold Store (Muharraq)
  {
    number: 501,
    type: 'bachelor',
    isRented: false,
    price: 310,
    branchId: '685d21b6b7d16c132a567ede',
    flatImages: ['https://picsum.photos/300/200?random=13']
  },
  {
    number: 502,
    type: 'family',
    isRented: true,
    price: 460,
    branchId: '685d21b6b7d16c132a567ede',
    flatImages: ['https://picsum.photos/300/200?random=14']
  },
  {
    number: 503,
    type: 'bachelor',
    isRented: false,
    price: 330,
    branchId: '685d21b6b7d16c132a567ede',
    flatImages: ['https://picsum.photos/300/200?random=15']
  }
]

const seedFlats = async () => {
  await Flat.deleteMany()
  await Flat.insertMany(flats)
  console.log('Flats seeded successfully.')
  process.exit()
}

seedFlats()
