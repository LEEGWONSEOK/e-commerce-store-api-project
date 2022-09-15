const express = require('express');
const {
  getAddress,
  getAllAddress,
  createAddress,
  updateAddress,
  deleteAddress,
} = require('../controllers/addresses');

const router = express.Router({ mergeParams: true });

// Address CRRUD Router
router.route('/')
  .post(createAddress)
  .get(getAllAddress)

router.route('/:id')
  .get(getAddress)
  .get(getAllAddressById) // 
  .patch(updateAddress)
  .delete(deleteAddress)

module.exports = router;