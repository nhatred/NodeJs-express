// 2 Thứ bắt buộc có
const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.use('/:slug', newsController.show);
router.use('/', newsController.index); // tuyến đường chính luôn luôn nừm dưới cùng

module.exports = router;
