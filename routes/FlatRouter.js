const router = require('express').Router()
const controller = require('../controllers/FlatController')

router.get('/byBranch/:branchId', controller.GetFlatsByBranch)

router.get('/:flatId', controller.GetFlatById)


module.exports = router
