import { supabase } from "./ClientAuthData.js";

export async function putProduct(reference, product) {
  const { data, error } = await supabase
    .from("product")
    .update(product)
    .eq("reference", reference)
    .select();

  if (data.length !== 0 && error === null) {
    return data;
  }
  if (error === null)
    throw Error(
      "No se encuentra un producto con esta referencia: " + reference
    );
  throw Error(error.message);
}
