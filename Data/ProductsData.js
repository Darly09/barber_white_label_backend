import { supabase } from "./ClientAuthData.js";

export async function selectProduct() {
  const { data, error } = await supabase.from("product").select();

  if (error === null) {
    return data;
  }
  throw Error(error.message);
}
