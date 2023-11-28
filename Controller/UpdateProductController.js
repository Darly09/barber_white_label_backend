const { selectProduct } = require("../data/ProductsData.js");

async function updateProduct(product, reference) {
  const products = await selectProduct();
  const productIndex = products.findIndex(
    (product) => product.reference == reference
  );

  if (
    productIndex === -1 ||
    productIndex === null ||
    productIndex === undefined
  ) {
    throw Error("Producto no encontrado.");
  }

  products[productIndex] = product;

  return products[productIndex];
}

module.exports = { updateProduct };
