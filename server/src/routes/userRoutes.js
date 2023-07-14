const express = require("express");
const { register, login, logout } = require("../controllers/userControllers");
const { validations, validateResult }=require('../validators/userValidations')
const router = express.Router();

router.post("/register",validations, validateResult, register);
router.post("/login",validations, validateResult, login);
router.post("/logout", logout);

module.exports = router;
