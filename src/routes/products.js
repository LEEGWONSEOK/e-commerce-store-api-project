const express = require('express');
const productController = require('../controllers/products');
const router = express.Router({ mergeParams: true });

router.post('/', productController.createRecruit); // 상품 등록
router.get('/', productController.readAllRecruit); // 상품 전체 조회
router.get('/:id', productController.readRecruit); //상품 상세 조회
router.patch('/:id', productController.updateRecruit); // 상품 수정
router.delete('/:id', productController.deleteRecruit); // 상품 삭제

module.exports = router;