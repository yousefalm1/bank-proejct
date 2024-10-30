"use server";

import { baseUrl, getHeaders } from "@/actions/config";
import { setToken, deleteToken } from "@/lib/token";
import { redirect } from "next/navigation";
import { registrationSchema } from "@/app/register/register-schema";
export async function login(formData) {
  const userData = Object.fromEntries(formData);

  const response = await fetch(`${baseUrl}/mini-project/api/auth/login`, {
    method: "POST",
    headers: await getHeaders(),
    body: JSON.stringify(userData),
  });

  const { token } = await response.json();
  console.log(token);
  await setToken(token);

  redirect("/dashboard");
}

export async function register(state, formData) {
  const validatedFields = registrationSchema.safeParse({
    name: formData.get("username"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const response = await fetch(`${baseUrl}/mini-project/api/auth/register`, {
    method: "POST",
    body: formData,
  });
  console.log(response);

  const { token } = await response.json();
  await setToken(token);
}

export async function logout() {
  // What do you need to do to logout?
  await deleteToken();
  // Where should you redirect the user?
  redirect(`/`);
}
