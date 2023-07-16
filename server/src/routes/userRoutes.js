const express = require("express");
const { register, login, logout } = require("../controllers/userControllers"); // Requering CRUD APIs for users
const { validations, validateResult }=require('../validators/userValidations') // Requring Middleware validations for query and body params 
const router = express.Router();

// User login, register and logout Routes with middleware validations.  
router.post("/register",validations, validateResult, register);
router.post("/login",validations, validateResult, login);
router.post("/logout", logout);

module.exports = router;
