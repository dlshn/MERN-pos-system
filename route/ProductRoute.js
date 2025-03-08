const express = require('express');
const router = express.Router();
const ProductController = require('../controller/ProductController');

router.post('/create',ProductController.saveProduct);
router.put('/update/:id',ProductController.updateProduct);
router.delete('/delete/:ide',ProductController.deleteProduct);
router.get('/find/:id',ProductController.findProduct);
router.get('/find-all',ProductController.loadAllProduct);
router.get('/lower-qty-list',ProductController.findLowStockProducts);


module.exports = router;