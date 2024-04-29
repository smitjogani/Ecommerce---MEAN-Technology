const express = require("express");
const router = express.Router();
const adminController = require("../../Controller/admin/adminOrder.controller");
const authenticate = require("../../middleware/authenticate")

router.get("/",adminController.getAllOrder);
// router.put("/:orderId/confirmed",authenticate,adminController.confirmedOrder);
// router.put("/:orderId/ship",authenticate,adminController.shipOrder);
// router.put("/:orderId/deliver",authenticate,adminController.deliverOrder);
// router.put("/:orderId/cancel",authenticate,adminController.cancelledOrders);
// router.put("/:orderId/delete",authenticate,adminController.deleteOrder);

module.exports = router;