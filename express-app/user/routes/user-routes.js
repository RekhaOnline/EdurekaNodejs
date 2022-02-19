//api/user

//step1: Import Express
const express =require("express");
const userController = require("../controllers/user");

//step2: Create router
const router =express.Router();

//Step3: Configure Routes
router.put("/", userController.update);
// api/user/id
router.get("/:id", userController.getByID);
router.delete("/:id", userController.delete);
module.exports = router;