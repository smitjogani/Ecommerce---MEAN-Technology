const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 50
    },
    parentCatagory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories',
    },
    level: {
        type: Number,
        required: true
    }
});

const Catagory = mongoose.model('categories', categorySchema);
module.exports = Catagory;