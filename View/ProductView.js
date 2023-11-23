const express = require("express");
const { getProduct } = require("../Controller/GetProductsController.js");
const ProductsRoutes = express.Router();

ProductsRoutes.get("/products", async (req, res) => {
  let statusCode = 200;
  try {
    const products = await getProduct();
    res.send({
      code: statusCode,
      message: "success",
      data: products,
    });
  } catch (error) {
    statusCode = 404,
    res.status(statusCode);
    res.send({
      code: statusCode,
      message: error,
    });
  }
});

module.exports = { ProductsRoutes };
