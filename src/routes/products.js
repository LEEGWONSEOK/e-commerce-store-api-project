const express = require('express');
const {
  getProduct,
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/products');

const router = express.Router({ mergeParams: true });

// Product CRRUD Router
router.route('/')
  .post(createProduct)
  .get(getAllProduct)

router.route('/:id')
  .get(getProduct)
  .patch(updateProduct)
  .delete(deleteProduct)

module.exports = router;