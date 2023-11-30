import express from "express";
import bodyParser from "body-parser";
import { LoginRoutes } from "./view/LoginView.js";
import { ServiceRoutes } from "./view/ServiceView.js";
import { ProductsRoutes } from "./view/ProductView.js";
import { ProductsByRefRoutes } from "./view/ProductByRefView.js";
import { ProductUpdateRoutes } from "./view/UpdateProductView.js";
import { ServiceUpdateRoutes } from "./view/UpdateServiceView.js";
import { AddProductRoutes } from "./view/AddProductView.js";
const { DeleteService } = require("./controller/serviceController.js");
import { ProductDeleteRoutes } from "./view/DeleteProductView.js";
import cors from "cors";

const PORT = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.use(
  "/api",
  LoginRoutes,
  ProductsRoutes,
  ServiceRoutes,
  ProductsByRefRoutes,
  ProductUpdateRoutes,
  ServiceUpdateRoutes,
  AddProductRoutes
);

app.listen(PORT);
console.log(`Servidor Corriendo en el puerto ${PORT}`);
