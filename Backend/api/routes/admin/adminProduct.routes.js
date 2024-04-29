const express = require("express");
const router = express.Router();
const authenticate = require("../../middleware/authenticate");
const adminProductController = require("../../Controller/product/product.controller");

router.post("/",adminProductController.createProduct);
router.post("/creates",adminProductController.createMultipleProduct);
router.delete("/deleteProduct/:id",adminProductController.deleteProduct);
router.put("/update/:id",adminProductController.updateProduct);

module.exports = router;