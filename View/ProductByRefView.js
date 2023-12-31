import express from "express";
import { getProductByRef } from "../controller/GetProductByRefController.js";
export const ProductsByRefRoutes = express.Router();

ProductsByRefRoutes.get("/product/:id", async (req, res) => {
  let statusCode = 200;
  try {
    const id = req.params.id;
    const product = await getProductByRef(id);
    res.status(statusCode);
    res.send({
      code: statusCode,
      message: "success",
      data: product,
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
