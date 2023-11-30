import { supabase } from "../data/ClientAuthData.js";

export async function addService(service) {
  const { data, error } = await supabase
  .from("service")
  .insert([service])
  .select();
console.log(error);

if (data !== null && error === null) {
  return data;
}
if (error === null) throw Error("No se pudo crear el producto");
throw Error(error.message);
}

