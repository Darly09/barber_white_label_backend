import { supabase } from "./ClientAuthData.js";

export async function putProduct(reference, product) {
  const { data, error } = await supabase
    .from("product")
    .update({
      name: product.name,
      brand: product.brand,
      category: product.category,
      price: product.price,
      description: product.description,
      quantity: product.quantity,
      status: product.status,
      img: product.img,
    })
    .eq("reference", reference)
    .select();
  console.log(data);
  console.log(error);

  if (data.length !== 0 && error === null) {
    return data;
  }
  if (error === null)
    throw Error("No se encuentra un producto con este id: " + reference);
  throw Error(error.message);
}
