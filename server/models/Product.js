const { Schema, model } = require('mongoose');
const productSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  countInStock: {
    type: Number
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  reviews: [{
    type: String,
    default: 0,
  }],
  ratings: [{
    type: Number,
    default: 0,
  }],
});

module.exports = model("Product", productSchema);