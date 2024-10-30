// Handles withdrawal operations, allowing a logged-in user to subtract funds from their balance using a PUT request.
'use server';
import { baseUrl, getHeaders } from '@/actions/config';
import { revalidatePath } from 'next/cache';

export const withdrawFunds = async (formData) => {
  const withdraw = Object.fromEntries(formData);

  const response = await fetch(
    `${baseUrl}/mini-project/api/transactions/withdraw`,
    {
      method: 'PUT',
      headers: await getHeaders(),
      body: JSON.stringify(withdraw),
    }
  );

  revalidatePath('/dashboard');
};
