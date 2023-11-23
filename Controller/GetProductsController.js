const { selectProduct } = require("../Data/ProductsData.js");

async function getProduct() {
  const products = await selectProduct();

  return products;
}

module.exports = { getProduct };
