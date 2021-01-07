const { check } = require("express-validator");

module.exports = {
  requiredName: check("name")
    .trim()
    .isLength({ min: 4, max: 40 })
    .withMessage("Must be between 4 and 40 characters"),

  requiredEmail: check("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("Must be valid email"),
  requiredPassword: check("password")
    .trim()
    .isLength({ min: 6, max: 14 })
    .withMessage("Must be between 6 and 14 characters"),
};
