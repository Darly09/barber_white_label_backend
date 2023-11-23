const express = require("express");
const bodyParser = require("body-parser");

const { LoginRoutes } = require("./View/LoginView.js");
const { ProductsRoutes } = require("./View/ProductView.js");
const { ProductsByRefRoutes } = require("./View/ProductByRefView.js");
const { ServiRoutes } = require("./view/ServiView.js");

const PORT = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", LoginRoutes, ProductsRoutes, ServiRoutes, ProductsByRefRoutes);

app.listen(PORT);
console.log(`Servidor Corriendo en el puerto ${PORT}`);
