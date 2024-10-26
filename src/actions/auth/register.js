// Handles user registration by sending a POST request with user data to create a new account.
'use server';

import { redirect } from 'next/navigation';
import { baseUrl } from '@/actions/config';
import { setToken } from '@/lib/token';

export async function register(formData) {
  const response = await fetch(`${baseUrl}/mini-project/api/auth/register`, {
    method: 'POST',
    body: formData,
  });

  const { token } = await response.json();
  await setToken(token);

  redirect('/');
}
