import express from "express";
import { updateService } from "../controller/UpdateServiceController.js";
export const ServiceUpdateRoutes = express.Router();

ServiceUpdateRoutes.patch("/updateService/:id", async (req, res) => {
  let statusCode = 200;
  try {
    const id = req.params.id;
    const service = req.body;
    const update = await updateService(service, id);
    res.status(statusCode);
    res.send({
      code: statusCode,
      message: "El Servicio se actualizó correctamente.",
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
