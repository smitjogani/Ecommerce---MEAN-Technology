const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');

const authRoutes = require("./api/routes/auth/auth.routes");
const userRoutes = require("./api/routes/user/user.routes");
const productRoutes = require("./api/routes/product/product.routes");
const adminProductRoutes = require("./api/routes/admin/adminProduct.routes");
const orderRoutes = require("./api/routes/order/order.routes");
const adminOrderRoutes = require("./api/routes/admin/admin.routes");
const paymentRoutes = require("./api/routes/payment/payment.routes");
const addressRoutes = require("./api/routes/address/address.routes")

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/address", addressRoutes);

app.use("/api/admin/orders", adminOrderRoutes);
app.use("/api/admin/products", adminProductRoutes);

module.exports = app;
