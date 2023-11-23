const express = require('express');
const {getServices} = require("../controller/ServiController.js");
const ServiRoutes = express.Router();


ServiRoutes.get('/services', async (req, res) => {
  res.send(await getServices());
});

module.exports = { ServiRoutes };





