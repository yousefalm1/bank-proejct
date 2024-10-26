'use server';

import { setToken } from '@/lib/token';
import { baseUrl, getHeaders } from '../config';
import { redirect } from 'next/navigation';

export async function login(formData) {
  const userData = Object.fromEntries(formData);

  const response = await fetch(`${baseUrl}/mini-project/api/login`, {
    method: 'POST',
    headers: await getHeaders(),
    body: JSON.stringify(userData),
  });

  const { token } = await response.json();
  await setToken(token);

  redirect('/');
}
