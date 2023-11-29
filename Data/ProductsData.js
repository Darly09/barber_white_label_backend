import { supabase } from "./ClientAuthData.js";

export async function selectProduct() {
  const result = await supabase.from("product").select();

  return result;
}
