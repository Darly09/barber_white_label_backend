import { supabase } from "./ClientAuthData.js";

export async function selectServices() {
  const {data, error} = await supabase.from("service").select();

  if (error == null ){
    return data;
  }
  throw Error(error.message);
}