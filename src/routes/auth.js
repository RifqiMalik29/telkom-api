const authController = require('../controllers/auth');
const router = require('express').Router();
const { requiredName, requiredEmail, requiredPassword } = require('../middlewares/validator');

router
    .post('/register', [requiredName, requiredEmail, requiredPassword], authController.postRegister)
    .post('/login', authController.postLogin);

module.exports = router;