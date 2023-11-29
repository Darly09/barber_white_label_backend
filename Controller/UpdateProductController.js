import { selectProduct } from "../data/ProductsData.js";

export async function updateProduct(product, reference) {
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
