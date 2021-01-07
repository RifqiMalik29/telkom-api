const authController = require('../models/auth');
const router = require('express').Router();
const { requiredName, requiredEmail, requiredPassword } = require('../middlewares/validator');

router.post('/register', [requiredName, requiredEmail, requiredPassword], authController.postRegister);

module.exports = router;