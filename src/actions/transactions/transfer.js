// Allows a logged-in user to transfer funds to another user account using a PUT request.
'use server';
import { baseUrl, getHeaders } from '@/actions/config';
import { revalidatePath } from 'next/cache';

export const transferFunds = async (formData, username) => {
  const userData = Object.fromEntries(formData);

  const response = await fetch(
    `${baseUrl}/mini-project/api/transactions/transfer/${username}`,
    {
      method: 'PUT',
      headers: await getHeaders(),
      body: JSON.stringify(userData),
    }
  );

  revalidatePath('/dashboard/users');
};
