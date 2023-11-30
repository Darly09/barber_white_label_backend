import express from "express";
import { login } from "../controller/LoginController.js";
import { Login } from "../model/Login.js";
export const LoginRoutes = express.Router();

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
