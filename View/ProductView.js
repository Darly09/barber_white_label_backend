import express from "express";
import { getProduct } from "../controller/GetProductsController.js";
export const ProductsRoutes = express.Router();

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
    (statusCode = 404), res.status(statusCode);
    res.send({
      code: statusCode,
      message: error,
    });
  }
});
