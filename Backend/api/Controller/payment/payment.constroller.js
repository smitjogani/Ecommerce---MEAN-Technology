const paymentService = require("../../Services/Payment/payment.service");
const Razorpay = require("razorpay");

var razorpayInstance = new Razorpay({
  key_id: "rzp_test_xanDRht8wjKBO3",
  key_secret: "3OBNYFmXRBLAgr9rJdEewnzn",
});

const createPayment = async (req, res) => {
  const data = req.body;

  const amount = req.body.amount * 100;

  const options = {
    amount: amount,
    currency: "INR",
    receipt: "smitjogani00@gmail.com",
  };

  razorpayInstance.orders.create(options, (err, order) => {
    if (!err) {
      res.status(200).send({
        success: true,
        msg: "Order Created",
        order_Id: order.id,
        amount: amount,
        key_id: "rzp_test_xanDRht8wjKBO3",
        product_name: data.productName,
        description: "",
        contact: "9328360301",
        name: "Smit Jogani",
        email: "smit61504@gmail.com",
      });
    }
    else{
      res.status(400).send({success:false, msg:'Somthing Wrong'})
    }
  });
};



module.exports = {
  createPayment,
};
