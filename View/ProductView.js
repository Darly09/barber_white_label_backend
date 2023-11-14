const express = require("express");
const { getProduct } = require("../Controller/GetProductsController.js");
const ProductsRoutes = express.Router();

ProductsRoutes.get("/products", async (req, res) => {
  res.send(await getProduct());
});

module.exports = { ProductsRoutes };
