import { supabase } from "../data/ClientAuthData.js";

export async function addProduct(product) {
  const { data, error } = await supabase
    .from("product")
    .insert([product])
    .select();

  if (data !== null && error === null) {
    return data;
  }
  if (error === null) throw Error("No se pudo crear el producto");
  throw Error(error.message);
}
