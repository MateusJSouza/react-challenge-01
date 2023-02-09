const { Router } = require('express');

const ProductController = require('./app/controllers/ProductController');

const router = Router();

router.get('/', (request, response) => {
  response.send('Hello');
});

router.post('/cart', ProductController);
router.get('/cart', ProductController);
router.update('/cart/:id', ProductController);

module.exports = router;
