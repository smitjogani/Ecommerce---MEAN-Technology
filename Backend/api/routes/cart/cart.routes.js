const express = require("express");
const router = express.Router();
const cartController = require("../../Controller/cart/cart.controller")
const authenticate = require("../../middleware/authenticate")

router.get("/",cartController.findUserCart);
router.get("/add",authenticate,cartController.addItemToCart)

module.exports = router;