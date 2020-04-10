const mongoose = require("mongoose");

//product model
const ProductSchema = new mongoose.Schema({
  imgSrc: { type: String },
  imgDetails: { type: String }
});

let Product = mongoose.model("product", ProductSchema);
module.exports = Product;
