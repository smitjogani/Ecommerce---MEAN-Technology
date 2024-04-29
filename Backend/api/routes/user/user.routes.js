const express = require("express");
const router = express.Router();
const userController = require("../../Controller/user/user.controller");

router.get("/profile",userController.getUserProfile);
router.get("/getAllUser",userController.getAllUsers);

module.exports = router;