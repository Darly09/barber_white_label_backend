const express = require("express");
const bodyParser = require("body-parser");
const { LoginRoutes } = require("./view/LoginView.js");
const { ServiceRoutes } = require("./view/ServiceView.js")
const { login } = require("./controller/LoginController.js");
const { addService } = require("./controller/addServiceController.js");
const { ProductsRoutes } = require("./View/ProductView.js");
const { ProductsByRefRoutes } = require("./View/ProductByRefView.js");
const { ProductUpdateRoutes } = require("./View/UpdateProductView.js");


const PORT = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

  app.post("/api/services", (req, res) => {
    try {
     
      const newServiceData = req.body;
      const newService = addService(newServiceData);
  
      res.status(201).json(newService); 
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
app.use(
  "/api",
  LoginRoutes,
  ProductsRoutes,
  ServiceRoutes,
  ProductsByRefRoutes,
  ProductUpdateRoutes
);

app.listen(PORT);
console.log(`Servidor Corriendo en el puerto ${PORT}`);
