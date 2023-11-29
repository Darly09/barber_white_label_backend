import { selectProduct } from "../data/ProductsData.js";

export function addProduct(newProductData) {
  if (
    !newProductData.name ||
    !newProductData.brand ||
    !newProductData.category ||
    !newProduct.price ||
    !newProduct.description ||
    !newProductData.quantity ||
    !newProductData.status
  ) {
    throw Error("Todos los campos son obligatorios");
  }

  const products = selectProduct();

  const newProduct = {
    reference: products.length + 1,
    ...newProductData,
  };

  products.push(newProduct);

  return newProduct;
}
