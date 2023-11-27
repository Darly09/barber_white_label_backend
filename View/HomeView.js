const express = require("express");
const { getHome } = require("../Controller/HomeController.js");
const HomeRoutes = express.Router();

HomeRoutes.get("/home", async (req, res) => {
    try {
        const response = await getHome();
        res.send(response);
    } catch (error) {
        res.status(404);
        res.send({
            message: error.message,
        });
    }
});

module.exports = { HomeRoutes: HomeRoutes };