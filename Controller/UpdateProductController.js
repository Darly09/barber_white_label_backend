import { putProduct } from "../data/UpdateProductData.js";

export async function updateProduct(product, reference) {
  const productUpdated = await putProduct(reference, product);
  if (
    productUpdated === -1 ||
    productUpdated === null ||
    productUpdated === undefined
  ) {
    throw Error("Producto no encontrado.");
  }
  return productUpdated;
}
