const { validationResult, body } = require("express-validator");

const validations = [
    body("username")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Username Required")
    .isString()
    .withMessage("Username should be Alphanumeric"),
    body("email")
    .trim()
    .notEmpty()
    .withMessage("Email Required")
    .isEmail()
    .withMessage("Email Wrong Format for Email"),
    body("password")
    .trim()
    .notEmpty()
    .withMessage("Password Required")
    .isString()
    .withMessage("Password should be Alphanumeric"),
];

const validateResult = (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      const messages = error.errors.map((e) => e.msg);
      res.status(400).send(messages);
    } else {
      next();
    }
  };
  
  module.exports = { validations, validateResult };