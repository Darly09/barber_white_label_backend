import { supabase } from "../data/ClientAuthData.js";

export async function deleteService(reference) {
  const { data, error } = await supabase
    .from("service")
    .delete()
    .eq("reference", reference)
    .select();

  if (data.length !== 0 && error === null) {
    return data;
  }
  if (error === null) {
    throw Error("No se encuentra un servicio con esta referencia: " + reference);
  }
  throw Error(error.message);
}
