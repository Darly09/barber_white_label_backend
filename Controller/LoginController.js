import { signInWithEmail } from "../data/LoginData.js";

export async function login(login) {
  return signInWithEmail(login.email, login.password);
}
