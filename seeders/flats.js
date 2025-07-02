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
    flatImages: [
 '/images/f1.jpg'
]

  },
  {
    number: 102,
    type: 'family',
    isRented: false,
    price: 420,
    branchId: '685d21b6b7d16c132a567eda',
    flatImages: [ '/images/f2.jpg']

  },
  {
    number: 103,
    type: 'bachelor',
    isRented: false,
    price: 360,
    branchId: '685d21b6b7d16c132a567eda',
   flatImages: [ '/images/f3.jpg'

]

  },

  // Branch: Gold (Manama)
  {
    number: 201,
    type: 'family',
    isRented: false,
    price: 390,
    branchId: '685d21b6b7d16c132a567edb',
    flatImages: [
   '/images/f1.jpg'

]

  },
  {
    number: 202,
    type: 'bachelor',
    isRented: false,
    price: 310,
    branchId: '685d21b6b7d16c132a567edb',
   flatImages: [
  '/images/f3.jpg'

]

  },
  {
    number: 203,
    type: 'family',
    isRented: false,
    price: 400,
    branchId: '685d21b6b7d16c132a567edb',
   flatImages: [
   '/images/f2.jpg'

]

  },

  // Branch: HM (Manama)
  {
    number: 301,
    type: 'bachelor',
    isRented: false,
    price: 320,
    branchId: '685d21b6b7d16c132a567edc',
   flatImages: [
   '/images/f3.jpg'

]

  },
  {
    number: 302,
    type: 'family',
    isRented: false,
    price: 450,
    branchId: '685d21b6b7d16c132a567edc',
   flatImages: [
   '/images/f1.jpg'

]

  },
  {
    number: 303,
    type: 'bachelor',
    isRented: false,
    price: 330,
    branchId: '685d21b6b7d16c132a567edc',
  flatImages: [
   '/images/f2.jpg'

]

  },

  // Branch: Cazino Park (Muharraq)
  {
    number: 401,
    type: 'family',
    isRented: false,
    price: 410,
    branchId: '685d21b6b7d16c132a567edd',
   flatImages: [
   '/images/f3.jpg'

]

  },
  {
    number: 402,
    type: 'bachelor',
    isRented: false,
    price: 300,
    branchId: '685d21b6b7d16c132a567edd',
    flatImages: [
   '/images/f2.jpg'

]

  },
  {
    number: 403,
    type: 'family',
    isRented: false,
    price: 430,
    branchId: '685d21b6b7d16c132a567edd',
    flatImages: [
   '/images/f1.jpg'

]

  },

  // Branch: Aljar Cold Store (Muharraq)
  {
    number: 501,
    type: 'bachelor',
    isRented: false,
    price: 310,
    branchId: '685d21b6b7d16c132a567ede',
   flatImages: [
   '/images/f3.jpg'

]

  },
  {
    number: 502,
    type: 'family',
    isRented: false,
    price: 460,
    branchId: '685d21b6b7d16c132a567ede',
   flatImages: [
   '/images/f2.jpg'

]

  },
  {
    number: 503,
    type: 'bachelor',
    isRented: false,
    price: 330,
    branchId: '685d21b6b7d16c132a567ede',
    flatImages: [
   '/images/f1.jpg'

]

  }
]

const seedFlats = async () => {
  await Flat.deleteMany()
  await Flat.insertMany(flats)
  console.log('Flats seeded successfully.')
  process.exit()
}

seedFlats()
