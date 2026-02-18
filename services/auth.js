import bcrypt from "bcryptjs";
import { createUser, getUserByEmail } from "@/querys/users";

export async function authenticate(email, password) {
  "use server";
  try {
    const user = await getUserByEmail(email);
    if (!user.rows.length) return null;

    const match = await bcrypt.compare(password, user.rows[0].password);
    if (!match) return null;

    return user.rows[0];
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function register(formData) {
  "use server";

  const email = formData.get("email");
  const password = formData.get("password");
  const name = formData.get("name");
  const lastname = formData.get("lastname");

  console.log("Entrando a función");
  // 1. Review all the fields and ensure they are valid
  if (!name || !lastname || !email || !password)
    throw new Error("Missing required fields");

  try {
    // 2. Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);
    // 3. Create the user
    const result = await createUser(name, lastname, email, hashedPassword);
    console.log("User registered:", result);
    return result;
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
}
