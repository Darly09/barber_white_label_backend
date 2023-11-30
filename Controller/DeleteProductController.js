import { deleteProduct } from "../data/DeleteProductData.js";

export async function delProduct(reference) {
  const Productdelete = await deleteProduct(reference);

  if (
    Productdelete === -1 ||
    Productdelete === null ||
    Productdelete === undefined
  ) {
    throw Error("Producto no encontrado.");
  }
  return Productdelete;
}
