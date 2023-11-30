import { supabase } from "./ClientAuthData.js";

export async function selectProduct() {
  const { data, error } = await supabase.from("product").select();

  if (error === null) {
    return data;
  }
  throw Error(error.message);
}

export async function selectProductById(reference){
  const { data, error } = await supabase.from("product").select().eq("reference", reference);

  if (error === null) {
    return data;
  }
  throw Error(error.message);
}