const mongoose = require("mongoose");
require("dotenv").config()

const mongodbUrl = process.env.URL;

const connectDB = () => {
    mongoose.connect(mongodbUrl);
}

module.exports = { connectDB };