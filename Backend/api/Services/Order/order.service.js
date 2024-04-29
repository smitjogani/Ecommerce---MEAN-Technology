const Order = require("../../models/Order/order.model");

async function createOrder(data) {
  const image = data[0].image;
  const title = data[0].title;
  const size = data[0].sizes;
  const price = data[0].discountedPrice;
  const userId = data[2];
  const ofname = data[1].firstName;
  const olname = data[1].lastName;
  const orderAddress = data[1].streetAddress;
  const orderCity = data[1].city;
  const orderState = data[1].state;
  const orderPincode = data[1].pincode;
  const orderMobile = data[1].mobile;

  const order = Order.create({
    image,
    title,
    size,
    price,
    userId,
    ofname,
    olname,
    orderAddress,
    orderCity,
    orderState,
    orderPincode,
    orderMobile,
  });
  return order;
}

async function findOrderById(userId) {
  return await Order.find({ userId });
}

async function getAllOrder() {
  return await Order.find();
}

async function updatePaymentStatus(id) {
  return await Order.findByIdAndUpdate(id, { paymentStatus: true, orderStatus:"Confirm" });
}

module.exports = {
  createOrder,
  getAllOrder,
  findOrderById,
  updatePaymentStatus,
};
