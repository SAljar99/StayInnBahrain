const router = require('express').Router()
const controller = require('../controllers/FlatController')
const middleware = require('../middleware')

// 🧍‍♀️ User: Get flats by branch
router.get('/branch/:branch_id', controller.GetFlatsByBranch)

// 🧍‍♀️ User: Get a specific flat by ID
router.get('/:flat_id', controller.GetFlatById)

// 🧍‍♀️ User: Filter available flats by date range
router.post('/filter', controller.FilterAvailableFlats)

// 🛠️ Admin: Create a flat
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateFlat
)

// 🛠️ Admin: Update a flat
router.put(
  '/:flat_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateFlat
)

// ❌ Admin: Delete a flat
router.delete(
  '/:flat_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteFlat
)

module.exports = router
