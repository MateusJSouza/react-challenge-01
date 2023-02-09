const { Router } = require('express');

const ProductController = require('./app/controllers/ProductController');

const router = Router();

router.get('/cart', ProductController.index);
router.get('/cart/:id', ProductController.show);
router.delete('/cart/:id', ProductController.delete);
router.post('/cart', ProductController.store);
router.put('/cart/:id', ProductController.update);

module.exports = router;
