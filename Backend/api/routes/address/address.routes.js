const express = require("express");
const router = express.Router();
const addressController = require("../../Controller/address/address.controller");

router.post("/", addressController.addAddress);
router.get("/:id",addressController.getAddById)

module.exports = router;