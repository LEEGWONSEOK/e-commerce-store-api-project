const express = require('express');
const productController = require('../controllers/products');
const router = express.Router({ mergeParams: true });


// router.post('/companys/:companyId/recruits', recruitCtrl.createRecruit); // 채용공고 등록
// router.get('/recruits', recruitCtrl.readAllRecruit); // 채용공고 전체 조회
// router.get('/recruits/:recruitId', recruitCtrl.readRecruit); //채용공고 상세 조회
// router.patch('/recruits/:recruitId', recruitCtrl.updateRecruit); // 채용공고 수정
// router.delete('/recruits/:recruitId', recruitCtrl.deleteRecruit); // 채용공고 삭제

module.exports = router;