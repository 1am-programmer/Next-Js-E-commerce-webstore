import mongoose from "mongoose";

const Product = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  size: {
    type: [String],
  },
  color: {
    type: [String],
  },
  images: {
    type: [String],
    required: true,
  },
  reviews: {
    type: Map,
    of: String,
  },
  ratings: {
    type: Number,
  },
  quantity: {
    type: Number,
    required: true,
  },
});
