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

// router.post('/', createProduct); // 상품 등록
// router.get('/', getAllProduct); // 상품 전체 조회
// router.get('/:id', getProduct); //상품 상세 조회
// router.patch('/:id', updateProduct); // 상품 수정
// router.delete('/:id', deleteProduct); // 상품 삭제