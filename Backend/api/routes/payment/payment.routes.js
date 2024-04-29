const express = require("express");
const router = express.Router();
const orderController = require("../../Controller/payment/payment.constroller");

router.post("/createOrder", orderController.createPayment);

module.exports = router;