const express = require("express");
const { login } = require("../Controller/LoginController.js");
const { Login } = require("../Model/Login.js");
const LoginRoutes = express.Router();

LoginRoutes.post("/login", async (req, res) => {
  try {
    const user = req.body;
    const loginModel = new Login(user.email, user.password);
    const response = await login(loginModel);

    res.send(response);
  } catch (error) {
    res.status(404);
    res.send({
      message: error.message,
    });
  }
});

module.exports = { LoginRoutes };
