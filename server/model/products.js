const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true
    },
    Photo: {
      type: String,
    },
  },
  {
    collection: "Products",
  }
);

const Products = mongoose.model("Products", ProductSchema);

module.exports = Products;
