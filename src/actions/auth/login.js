// Handles user login by sending a POST request with credentials to authenticate the user.
'use server';
import { baseUrl, getHeaders } from '@/actions/config';

import { setToken } from '@/lib/token';
import { redirect } from 'next/navigation';

export const login = async (formData) => {
  const userData = Object.fromEntries(formData);

  const response = await fetch(`${baseUrl}/mini-project/api/auth/login`, {
    method: 'POST',
    headers: await getHeaders(),
    body: JSON.stringify(userData),
  });

  const { token } = await response.json();
  await setToken(token);

  redirect('/');
};
