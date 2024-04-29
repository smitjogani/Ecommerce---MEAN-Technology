const express = require("express");
const router = express.Router();
const productController = require("../../Controller/product/product.controller");
const authenticate = require("../../middleware/authenticate");

router.post("/", authenticate, productController.createProduct);
router.get("/id/:id", productController.findProductById);
router.get("/allproducts", productController.getAllProducts);
router.get("/getallproducts", productController.getProducts);
module.exports = router;
