const express = require("express");
const bodyParser = require("body-parser");
const { LoginRoutes } = require("./view/LoginView.js");
const { ServiRoutes } = require("./view/ServiView.js")

const PORT = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", LoginRoutes, ServiRoutes);

app.listen(PORT);
console.log(`Servidor Corriendo en el puerto ${PORT}`)

