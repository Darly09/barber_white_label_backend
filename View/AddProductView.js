const express = require("express");
const { addProduct } = require("../controller/AddProductController");
const AddProductRoutes = express.Router();

AddProductRoutes.post("/addProduct", async (req, res) => {
  let statusCode = 200;
  try {
    const newProductData = req.body;
    const newProduct = addProduct(newProductData);
    res.status(statusCode);
    res.send({
      code: statusCode,
      message: "sucess",
      data: newProduct,
    });
  } catch (error) {
    statusCode = 404;
    res.status(statusCode);
    res.send({
      code: statusCode,
      message: error.message,
    });
  }
});

module.exports = { AddProductRoutes };
