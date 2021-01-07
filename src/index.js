const router = require('express').Router();

// User & Product
const productRoute = require('./routes/product');

router.use('/product', productRoute);

module.exports = router;