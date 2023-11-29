import express from "express";
import { addProduct } from "../controller/AddProductController.js";
export const AddProductRoutes = express.Router();

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
