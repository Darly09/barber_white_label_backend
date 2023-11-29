import { selectProduct } from "../data/ProductsData.js";

export async function getProduct() {
  const products = await selectProduct();

  return products;
}
