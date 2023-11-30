import { supabase } from "./ClientAuthData.js";

export async function deleteProduct(reference) {
  const { error } = await supabase
    .from("product")
    .delete()
    .eq("reference", reference);

  if (error === null) return true;
  throw Error(error.message);
}
