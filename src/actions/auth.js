'use server';

import { baseUrl, getHeaders } from '@/actions/config';
import { setToken, deleteToken } from '@/lib/token';
import { redirect } from 'next/navigation';

export async function login(formData) {
  const userData = Object.fromEntries(formData);

  const response = await fetch(`${baseUrl}/mini-project/api/auth/login`, {
    method: 'POST',
    headers: await getHeaders(),
    body: JSON.stringify(userData),
  });

  const { token } = await response.json();
  await setToken(token);

  redirect('/dashboard');
}

export async function register(formData) {
  const response = await fetch(`${baseUrl}/mini-project/api/auth/register`, {
    method: 'POST',
    body: formData,
  });

  const { token } = await response.json();
  await setToken(token);
  redirect('/dashboard');
}

export async function logout() {
  // What do you need to do to logout?
  await deleteToken();
  // Where should you redirect the user?
  redirect(`/`);
}
