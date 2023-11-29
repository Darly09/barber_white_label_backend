import express from "express";
import { addService } from "../controller/addServiceController.js";
import {
  getServices,
  getServiceById,
} from "../controller/SelectServiceController.js";
export const ServiceRoutes = express.Router();

ServiceRoutes.get("/services", async (req, res) => {
  let statusCode = 200;
  try {
    const selectServices = parseInt(req.params.id);
    const services = await getServices(selectServices);
    res.status(statusCode);
    res.send({
      code: statusCode,
      message: "sucess",
      data: services,
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

ServiceRoutes.get("/services/:id", async (req, res) => {
  let statusCode = 200;
  try {
    const serviceId = parseInt(req.params.id);
    const service = await getServiceById(serviceId);
    res.status(statusCode);
    res.send({
      code: statusCode,
      message: "sucess",
      data: service,
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

ServiceRoutes.post("/services", async (req, res) => {
  let statusCode = 200;
  try {
    const newServiceData = req.body;
    const newService = addService(newServiceData);
    res.status(statusCode);
    res.send({
      code: statusCode,
      message: "sucess",
      data: newService,
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
