import express from "express";
import { deleteService } from "../controller/serviceController.js";
export const ServicesRoutes = express.Router();

ServicesRoutes.delete("/services/:reference", async (req, res) => {
  let statusCode = 200;
  const reference = req.params.reference;
  try {
    const result = await deleteService(reference);
    res.send({
      code: statusCode,
      message: "success",
      data: result,
    });
  } catch (error) {
    statusCode = 404;
    res.status(statusCode).send({
      code: statusCode,
      message: error.message,
    });
  }
});

