const authController = require('../controllers/auth');
const router = require('express').Router();
const { requiredName, requiredEmail, requiredPassword } = require('../middleware/validator');

router.post('/register', [requiredName, requiredEmail, requiredPassword], authController.postRegister);

module.exports = router;