// Handles withdrawal operations, allowing a logged-in user to subtract funds from their balance using a PUT request.
"use server";
import { baseUrl, getHeaders } from "@/actions/config";
import { revalidatePath } from "next/cache";

export const widthdrawFunds = async (formData) => {
  const widthdraw = Object.fromEntries(formData);

  const response = await fetch(
    `${baseUrl}/mini-project/api/transactions/withdraw`,
    {
      method: "PUT",
      headers: await getHeaders(),
      body: JSON.stringify(widthdraw),
    }
  );

  revalidatePath("/dashboard/profile");
};
