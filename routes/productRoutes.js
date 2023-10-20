const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/api/products', productController.filterProductsByName);
router.get('/api/products/:id', productController.getProductById);
router.post('/api/products', productController.addProduct);
router.put('/api/products/:id', productController.updateProduct);
router.delete('/api/products/:id', productController.removeProductById);
router.delete('/api/products', productController.deleteAllProducts);

module.exports = router;
