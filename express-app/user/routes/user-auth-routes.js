//api/user/auth
//Step1: Import express
const express = require("express");
const userAuthController = require("../controllers/user-auth-controller");


//Step2: Create router
const router =express.Router();

//Step3: Configure routes
router.post("/register",userAuthController.register);
router.post("/login",userAuthController.login);

module.exports = router;
