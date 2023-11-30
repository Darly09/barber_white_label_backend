import { selectProduct } from "../data/ProductsData.js";

export async function getProductByRef(id) {
  if (id == undefined || id == "" || id == null) {
    throw Error("Id invalido.");
  }
  const products = await selectProduct();
  const product = products.find((product) => product.reference == id);

  if (product === undefined) {
    throw Error("No se encontro el Producto.");
  }
  return product;
}
