const router = require('express').Router();

// User
const productRoutes = require('./routes/product');

// Auth
const authRoutes = require('./routes/auth');

router
    .use('/product', productRoutes)
    .use('/auth', authRoutes);

module.exports = router;