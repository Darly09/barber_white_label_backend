const express = require("express");
const bodyParser = require("body-parser");
const { LoginRoutes } = require("./View/LoginView.js");

const PORT = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", LoginRoutes);

app.listen(PORT);
console.log(`Servidor Corriendo en el puerto ${PORT}`)
