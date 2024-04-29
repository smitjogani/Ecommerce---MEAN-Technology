const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, default: "CUSTOMER" },
  mobileNo: { type: String },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const user = mongoose.model("users", userSchema);
module.exports = user;
