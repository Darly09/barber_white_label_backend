import express from "express";
import { deleteProduct } from "../data/DeleteProductData.js";

export const ProductDeleteRoutes = express.Router();

ProductDeleteRoutes.delete("/deleteProduct/:reference", async (req, res) => {
  let statusCode = 200;
  try {
    const reference = req.params.reference;
    const update = await deleteProduct(reference);
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
