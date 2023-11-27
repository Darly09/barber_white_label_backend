const express = require("express");
const bodyParser = require("body-parser");

const { LoginRoutes } = require("./View/LoginView.js");
const { HomeRoutes } = require("./View/HomeView.js");
const { ProductsRoutes } = require("./View/ProductView.js");
const { ProductsByRefRoutes } = require("./View/ProductByRefView.js");
const { ProductUpdateRoutes } = require("./View/UpdateProductView.js");
const { ServiRoutes } = require("./View/ServiView.js");

const PORT = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  "/api",
  LoginRoutes,
  HomeRoutes,
  ProductsRoutes,
  ServiRoutes,
  ProductsByRefRoutes,
  ProductUpdateRoutes
);

app.listen(PORT);
console.log(`Servidor Corriendo en el puerto ${PORT}`);
