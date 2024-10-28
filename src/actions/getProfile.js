"use server";

import { baseUrl, getHeaders } from "@/actions/config";

export async function getProfile() {
  const response = await fetch(`${baseUrl}/mini-project/api/auth/me`, {
    method: "GET",
    headers: await getHeaders(),
  });
  const myProfile = response.json();
  return myProfile;
}
