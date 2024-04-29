const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  image: { type: String, required: true},
  title: { type: String , required: true},
  size: { type: String , required: true},
  price: { type: Number , required: true},
  userId: { type: String, required: true },
  ofname: { type: String , required: true},
  olname: { type: String , required: true},
  orderAddress: { type: String , required: true},
  orderCity: { type: String , required: true},
  orderState: { type: String , required: true},
  orderPincode: { type: Number , required: true},
  orderMobile: { type: String , required: true},
  paymentStatus: { type: Boolean, required: true, default: false },
  orderStatus: { type: String, required: true, default: "waiting" },
  orderDate: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

const Order = mongoose.model("orders", orderSchema);
module.exports = Order;
