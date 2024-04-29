const express = require("express");
const router = express.Router();
const orderController = require("../../Controller/order/order.controller");

router.post("/", orderController.createOrder);
router.get("/:id", orderController.findOrdersThrewId);
router.put("/updateStatus/:id", orderController.updateStatus);

module.exports = router;
