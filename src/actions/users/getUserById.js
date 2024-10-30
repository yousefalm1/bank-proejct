// Fetches detailed information about a specific user by their userId using a GET request.
'use server';

import { baseUrl, getHeaders } from '@/actions/config';

export const getUserById = async (id) => {
  const response = await fetch(`${baseUrl}/mini-project/api/auth/user/${id}`, {
    method: 'GET',
    headers: await getHeaders(),
  });
  const user = await response.json();
  return user;
};
