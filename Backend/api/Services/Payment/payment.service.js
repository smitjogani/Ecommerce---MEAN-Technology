const Order = require("../../models/Order/order.model");

//razorPay payment integration
var razorpayInstance = {
  key_id: "rzp_test_xanDRht8wjKBO3",
  key_secret: "3OBNYFmXRBLAgr9rJdEewnzn",
};

async function makePayment(data) {
  var amount = 500;
  var options = {
    amount: amount * 100,
    currency: "INR",
    receipt: "recipt#1",
  };

  razorpayInstance.orders.create(options, (err, order) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "Error in creating order" });
    } else {
      console.log(order);
      res.json(order);
    }
  });
}

async function callbackPayment(data){
  const {order_id, payment_id, signaature} = data;
  res.json({success: true})
}

module.exports = {
  makePayment,callbackPayment
};
