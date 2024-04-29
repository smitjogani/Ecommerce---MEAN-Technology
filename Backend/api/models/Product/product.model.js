const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  discountedPrice: {
    type: Number,
  },
  // discountedPersent: {
  //   type: Number,
  // },
  brand: {
    type: String,
  },
  color: {
    type: String,
  },
  sizes: {
    type: String,
  },
  image: { type: String },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories",
  },
  fore:{type:String},
  typeOfCloth:{type:String},
  // category: {
  //   type: String,
  // },
  // for: {
  //   type: String,
  // },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Product = mongoose.model("products", ProductSchema);
module.exports = Product;
