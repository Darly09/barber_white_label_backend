import express from "express";
import { updateProduct } from "../controller/UpdateProductController.js";
export const ProductUpdateRoutes = express.Router();

ProductUpdateRoutes.patch("/updateProduct/:reference", async (req, res) => {
  let statusCode = 200;
  try {
    const reference = req.params.reference;
    const product = req.body;
    const update = await updateProduct(product, reference);
    res.status(statusCode);
    res.send({
      code: statusCode,
      message: "El producto se actualizó correctamente.",
      data: update,
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
