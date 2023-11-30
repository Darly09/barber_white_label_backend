import { supabase } from "./ClientAuthData.js";

export async function putService(reference, service) {
  const { data, error } = await supabase
    .from("service")
    .update({
      name: service.name,
      brand: service.brand,
      category: service.category,
      price: service.price,
      description: service.description,
      quantity: service.quantity,
      status: service.status,
      img: service.img,
    })
    .eq("reference", reference)
    .select();

  if (data.length !== 0 && error === null) {
    return data;
  }
  if (error === null)
    throw Error("No se encuentra un servicio con esta referencia: " + reference);
  throw Error(error.message);
}
