const { selectProduct } = require("../Data/ProductsData.js");
const { Home } = require("../Model/Home.js");

async function getHome() {
    const products = await selectProduct();
    const services = {};
    return new Home(products, services);
}

module.exports = { getHome };