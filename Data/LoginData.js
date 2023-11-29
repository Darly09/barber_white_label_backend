import { supabase } from "./ClientAuthData.js";

export async function signInWithEmail(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  console.log(data);
  console.log(error);
  if (error === null) {
    return data;
  }
  throw Error(error.message);
}
