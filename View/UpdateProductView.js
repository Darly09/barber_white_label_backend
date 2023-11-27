const express = require("express");
const { updateProduct } = require("../controller/UpdateProductController.js");
const ProductUpdateRoutes = express.Router();

ProductUpdateRoutes.put("/updateProduct/:reference", async (req, res) => {
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

module.exports = { ProductUpdateRoutes };
