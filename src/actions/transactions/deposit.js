// Handles deposit operations, allowing a logged-in user to add funds to their balance using a PUT request.
'use server';
import { baseUrl, getHeaders } from '@/actions/config';
import { revalidatePath } from 'next/cache';

export const depositFunds = async (formData) => {
  const userData = Object.fromEntries(formData);

  const response = await fetch(
    `${baseUrl}/mini-project/api/transactions/deposit`,
    {
      method: 'PUT',
      headers: await getHeaders(),
      body: JSON.stringify(userData),
    }
  );

  revalidatePath('/dashboard');
};
