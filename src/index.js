const router = require('express').Router();

// User
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');

// Auth
const authRoutes = require('./routes/auth');

router
    .use('/product', productRoutes)
    .use('/auth', authRoutes)
    .use('/cart', cartRoutes)

module.exports = router;