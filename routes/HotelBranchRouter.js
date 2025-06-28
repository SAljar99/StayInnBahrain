const router = require('express').Router();
const controller = require('../controllers/HotelBranchController');

router.get('/', controller.GetAllBranches);

module.exports = router;
